#include <stdio.h>

#define Q '#'

void parede(int altura){
	for (int i = 0; i < altura; ++i){
		printf("%c", Q);
	}
	printf("\n");
}

void casa(int h, int t = 6) {
	for(int x = 0; x < t; x++){
		parede(h);
	}
	printf("\n");
}

int main(){
	
	casa(3, 2);
	casa(9, 10);
	casa(12);
	casa(12);
	casa(20, 13);
	casa(50);
	
	return 0; 	
}


