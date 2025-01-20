//stack using array using double pointer
#include <stdio.h>
#include <stdlib.h>

#define MAX 5

// Function to push an element onto the stack
void push(int** top, int* stack, int* count, int value) {
    if (*count == MAX) {
        printf("Stack Overflow\n");
    } else {
        if (*top == NULL) {
            *top = stack;  // Initialize top to the base of the stack
        } else {
            (*top)++;
        }
        **top = value;
        (*count)++;
        printf("%d pushed onto the stack\n", value);
    }
}

// Function to pop an element from the stack
void pop(int** top, int* stack, int* count) {
    if (*count == 0) {
        printf("Stack Underflow\n");
    } else {
        int value = **top;
        if (*top == stack) {
            *top = NULL;  // Reset top to NULL when stack becomes empty
        } else {
            (*top)--;
        }
        (*count)--;
        printf("Popped element: %d\n", value);
    }
}

// Function to peek the top element of the stack
void peek(int* top, int* stack) {
    if (top == NULL) {
        printf("Stack is empty\n");
    } else {
        printf("Top element is: %d\n", *top);
    }
}

// Function to display the elements of the stack
void display(int* top, int* stack, int count) {
    if (count == 0) {
        printf("Stack is empty\n");
    } else {
        printf("Stack elements are: ");
        for (int* i = top; i >= stack; i--) {
            printf("%d ", *i);
        }
        printf("\n");
    }
}

int main() {
    int stack[MAX];
    int* top = NULL;  // Top pointer initialized to NULL
    int count = 0;    // Counter to keep track of the number of elements

    int choice, value;

    while (1) {
        printf("\n1. Push\n2. Pop\n3. Display\n4. Peek\n5. Exit\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to push: ");
                scanf("%d", &value);
                push(&top, stack, &count, value);
                break;

            case 2:
                pop(&top, stack, &count);
                break;

            case 3:
                display(top, stack, count);
                break;

            case 4:
                peek(top, stack);
                break;

            case 5:
                exit(0);

            default:
                printf("Invalid choice, please try again.\n");
        }
    }

    return 0;
}
