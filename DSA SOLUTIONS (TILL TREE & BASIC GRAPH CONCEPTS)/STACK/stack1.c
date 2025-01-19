//stack using array
#include <stdio.h>
#include <stdlib.h>

#define MAX 5

// Function to push an element onto the stack
void push(int stack[], int *top, int value) {
    if (*top == MAX - 1) {
        printf("Stack Overflow\n");
    } else {
        (*top)++;
        stack[*top] = value;
        printf("%d pushed onto the stack\n", value);
    }
}

// Function to pop an element from the stack
int pop(int stack[], int *top) {
    if (*top == -1) {
        printf("Stack Underflow\n");
        return -1;
    } else {
        int value = stack[*top];
        (*top)--;
        return value;
    }
}

// Function to display the elements of the stack
void display(int stack[], int top) {
    if (top == -1) {
        printf("Stack is empty\n");
    } else {
        printf("Stack elements are: ");
        for (int i = top; i >= 0; i--) {
            printf("%d ", stack[i]);
        }
        printf("\n");
    }
}

void peek(int stack[],int top){
    if(top==-1){
        printf("stack empty");

    }
    

    
    else{
        printf("%d",stack[top] );
        top--;
    }
}
int main() {
    int stack[MAX], top= -1;
    int choice, value;

    while (1) {
        printf("\n1. Push\n2. Pop\n3. Display\n 4. peek \n 5. Exit\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to push: ");
                scanf("%d", &value);
                push(stack, &top, value);
                break;

            case 2:
                value = pop(stack, &top);
                if (value != -1) {
                    printf("Popped element: %d\n", value);
                }
                break;

            case 3:
                display(stack, top);
                break;

            case 5:
                exit(0);
            case 4:

                peek(stack,top);
                break;

             default:
                printf("Invalid choice, please try again.\n");
                break;
        }
    }

    return 0;
}
