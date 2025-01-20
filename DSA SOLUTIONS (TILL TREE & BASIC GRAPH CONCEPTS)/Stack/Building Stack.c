#include <stdio.h>
#include <stdlib.h>

#define MAX 10

struct Stack {
    int items[MAX];
    int top;
};

void initStack(struct Stack* stack) {
    stack->top = -1;
}

int isFull(struct Stack* stack) {
    return stack->top == MAX - 1;
}

int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

void push(struct Stack* stack, int value) {
    if (isFull(stack)) {
        printf("Stack Overflow\n");
        return;
    }
    stack->items[++stack->top] = value;
}

int pop(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack Underflow\n");
        return -1;
    }
    return stack->items[stack->top--];
}

int peek(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is Empty\n");
        return -1;
    }
    return stack->items[stack->top];
}

int main() {
    struct Stack stack;
    initStack(&stack);
    
    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);
    
    printf("Top element: %d\n", peek(&stack));
    
    printf("Popped element: %d\n", pop(&stack));
    printf("Popped element: %d\n", pop(&stack));
    
    printf("Top element after pop: %d\n", peek(&stack));
    
    return 0;
}
