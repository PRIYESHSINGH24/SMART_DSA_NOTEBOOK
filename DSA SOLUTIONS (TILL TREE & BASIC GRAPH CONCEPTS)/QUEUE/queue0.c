//circular queue using array using pointer
#include <stdio.h>
#include <stdlib.h>

#define MAX 5  // Maximum size of the circular queue

// Function to initialize the circular queue
void initQueue(int* front, int* rear) {
    *front = -1;
    *rear = -1;
}

// Function to check if the queue is empty
int isEmpty(int front) {
    return front == -1;
}

// Function to check if the queue is full
int isFull(int front, int rear) {
    return (rear + 1) % MAX == front;
}

// Function to add an element to the circular queue (enqueue)
void enqueue(int* queue, int* front, int* rear, int value) {
    if (isFull(*front, *rear)) {
        printf("Queue is full! Cannot enqueue %d\n", value);
        return;
    }

    if (isEmpty(*front)) {
        *front = 0;  // Set front to 0 if queue is empty
    }

    // Move rear to the next position circularly
    *rear = (*rear + 1) % MAX;
    queue[*rear] = value;
    printf("%d enqueued to the queue\n", value);
}

// Function to remove an element from the circular queue (dequeue)
void dequeue(int* queue, int* front, int* rear) {
    if (isEmpty(*front)) {
        printf("Queue is empty! Cannot dequeue\n");
        return;
    }

    int value = queue[*front];
    printf("Dequeued element: %d\n", value);

    // Move front to the next position circularly
    if (*front == *rear) {
        // Queue has become empty
        *front = -1;
        *rear = -1;
    } else {
        *front = (*front + 1) % MAX;
    }
}

// Function to view the front element (peek)
void peek(int* queue, int front) {
    if (isEmpty(front)) {
        printf("Queue is empty!\n");
    } else {
        printf("Front element is: %d\n", queue[front]);
    }
}

// Function to display all elements in the circular queue
void display(int* queue, int front, int rear) {
    if (isEmpty(front)) {
        printf("Queue is empty!\n");
        return;
    }

    printf("Circular Queue elements: ");
    int i = front;
    while (1) {
        printf("%d ", queue[i]);
        if (i == rear) {
            break;
        }
        i = (i + 1) % MAX;
    }
    printf("\n");
}

int main() {
    int queue[MAX];
    int front, rear;

    // Initialize the circular queue
    initQueue(&front, &rear);

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
                peek(queue, front);
                break;

            case 4:
                display(queue, front, rear);
                break;

            case 5:
                exit(0);

            default:
                printf("Invalid choice, please try again.\n");
        }
    }

    return 0;
}
