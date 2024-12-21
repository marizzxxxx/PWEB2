const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let materiais = [];

class Material {
  constructor(id, titulo, autor, dataPublicacao, categoria) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.dataPublicacao = dataPublicacao;
    this.categoria = categoria;
  }

  consultar() {
    return {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      dataPublicacao: this.dataPublicacao,
      categoria: this.categoria,
    };
  }
}

class ObraLiteraria extends Material {
  constructor(id, titulo, autor, dataPublicacao, categoria, editora, isbn) {
    super(id, titulo, autor, dataPublicacao, categoria);
    this.editora = editora;
    this.isbn = isbn;
  }

  consultar() {
    return {
      ...super.consultar(),
      editora: this.editora,
      isbn: this.isbn,
    };
  }
}

class Artigo extends Material {
  constructor(id, titulo, autor, dataPublicacao, categoria, fonte, localizacao) {
    super(id, titulo, autor, dataPublicacao, categoria);
    this.fonte = fonte;
    this.localizacao = localizacao;
  }

  consultar() {
    return {
      ...super.consultar(),
      fonte: this.fonte,
      localizacao: this.localizacao,
    };
  }
}

app.get("/materiais", (req, res) => {
  res.json(materiais.map((material) => material.consultar()));
});

app.post("/materiais", (req, res) => {
  const { tipo, id, titulo, autor, dataPublicacao, categoria, ...resto } = req.body;

  if (!id || !titulo || !autor || !dataPublicacao || !categoria) {
    return res.status(400).json({ error: "Dados não fornecidos." });
  }

  let novoMaterial;
  switch (tipo) {
    case "obraLiteraria":
      novoMaterial = new ObraLiteraria(id, titulo, autor, dataPublicacao, categoria, resto.editora, resto.isbn);
      break;
    case "artigo":
      novoMaterial = new Artigo(id, titulo, autor, dataPublicacao, categoria, resto.fonte, resto.localizacao);
      break;
    default:
      novoMaterial = new Material(id, titulo, autor, dataPublicacao, categoria);
  }

  materiais.push(novoMaterial);
  res.status(201).json({ message: "Material cadastrado!", material: novoMaterial.consultar() });
});

app.get("/materiais/:id", (req, res) => {
  const { id } = req.params;
  const material = materiais.find((mat) => mat.id === parseInt(id));
  if (!material) {
    return res.status(404).json({ error: "Material não encontrado." });
  }
  res.json(material.consultar());
});

app.put("/materiais/:id", (req, res) => {
  const { id } = req.params;
  const material = materiais.find((mat) => mat.id === parseInt(id));
  if (!material) {
    return res.status(404).json({ error: "Material não encontrado." });
  }

  const novosDados = req.body;
  Object.assign(material, novosDados);

  res.json({ message: "Material atualizado!", material: material.consultar() });
});

app.delete("/materiais/:id", (req, res) => {
  const { id } = req.params;
  const index = materiais.findIndex((mat) => mat.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: "Material não encontrado." });
  }

  const [materialRemovido] = materiais.splice(index, 1);
  res.json({ message: "Material removido!", material: materialRemovido.consultar() });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
