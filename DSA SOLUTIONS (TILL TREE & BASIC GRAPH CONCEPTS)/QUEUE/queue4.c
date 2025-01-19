// queue using array
#include <stdio.h>
#include <stdlib.h>

#define MAX 5  // Maximum size of the queue

// Function to initialize the queue
void initQueue(int queue[], int* front, int* rear) {
    *front = -1;
    *rear = -1;
}

// Function to check if the queue is empty
int isEmpty(int* front) {
    return *front == -1;
}

// Function to check if the queue is full
int isFull(int* rear) {
    return *rear == MAX - 1;
}

// Function to add an element to the queue (enqueue)
void enqueue(int queue[], int* front, int* rear, int value) {
    if (isFull(rear)) {
        printf("Queue is full! Cannot enqueue %d\n", value);
    } else {
        if (*front == -1) {
            *front = 0;  // Set front to 0 if first element is being enqueued
        }
        (*rear)++;
        queue[*rear] = value;
        printf("%d enqueued to the queue\n", value);
    }
}

// Function to remove an element from the queue (dequeue)
void dequeue(int queue[], int* front, int* rear) {
    if (isEmpty(front)) {
        printf("Queue is empty! Cannot dequeue\n");
    } else {
        int value = queue[*front];
        printf("Dequeued element: %d\n", value);
        (*front)++;
        if (*front > *rear) {  // Reset the queue if empty
            *front = *rear = -1;
        }
    }
}

// Function to view the front element (peek)
void peek(int queue[], int* front) {
    if (isEmpty(front)) {
        printf("Queue is empty!\n");
    } else {
        printf("Front element is: %d\n", queue[*front]);
    }
}

// Function to display all elements in the queue
void display(int queue[], int* front, int* rear) {
    if (isEmpty(front)) {
        printf("Queue is empty!\n");
    } else {
        printf("Queue elements: ");
        for (int i = *front; i <= *rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}

int main() {
    int queue[MAX];  // Array to hold the queue elements
    int front, rear; // Front and rear pointers

    // Initialize the queue
    initQueue(queue, &front, &rear);

    int choice, value;

    while (1) {
        printf("\n1. Enqueue\n2. Dequeue\n3. Peek\n4. Display\n5. Exit\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to enqueue: ");
                scanf("%d", &value);
                enqueue(queue, &front, &rear, value);
                break;

            case 2:
                dequeue(queue, &front, &rear);
                break;

            case 3:
                peek(queue, &front);
                break;

            case 4:
                display(queue, &front, &rear);
                break;

            case 5:
                exit(0);

            default:
                printf("Invalid choice, please try again.\n");
        }
    }

    return 0;
}
