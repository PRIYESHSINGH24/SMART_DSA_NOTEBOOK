//priority queue using call by value
#include<stdio.h>
#define MAX 6
int main(){
    int arr[MAX];
    int i;
    for(i=0;i<=5;i+=1){
        printf("enter priority");
        scanf("%d",&arr[i]);
printf("\n enter value");
scanf("%d",&arr[++i]);
    }

    for(i=0;i<6;i++){
        printf("%d \n",arr[i]);
    }

return 0;
}