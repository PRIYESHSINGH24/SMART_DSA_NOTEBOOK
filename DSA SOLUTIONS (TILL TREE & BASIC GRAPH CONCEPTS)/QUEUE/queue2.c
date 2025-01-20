//queue using link list 
#include <stdio.h>
#include <stdlib.h>

// Node structure for the linked list
struct Node {
    int data;
    struct Node* next;
};

// Function to initialize the queue
void initQueue(struct Node** front, struct Node** rear) {
    *front = NULL;
    *rear = NULL;
}

// Function to check if the queue is empty
int isEmpty(struct Node** front) {
    return *front == NULL;
}

// Function to add an element to the queue (enqueue)
void enqueue(struct Node** front, struct Node** rear, int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (*rear == NULL) {
        // If the queue is empty, both front and rear are set to the new node
        *front = newNode;
    } else {
        // Add the new node at the end of the queue
        (*rear)->next = newNode;
    }
    *rear = newNode;  // Move rear to point to the new node
    printf("%d enqueued to the queue\n", value);
}

// Function to remove an element from the queue (dequeue)
void dequeue(struct Node** front, struct Node** rear) {
    if (isEmpty(front)) {
        printf("Queue is empty! Cannot dequeue\n");
    } else {
        struct Node* temp = *front;
        int value = temp->data;
        printf("Dequeued element: %d\n", value);
        *front = (*front)->next;  // Move front to the next node
        free(temp);  // Free the dequeued node

        // If the queue is now empty, reset rear
        if (*front == NULL) {
            *rear = NULL;
        }
    }
}

// Function to view the front element (peek)
void peek(struct Node** front) {
    if (isEmpty(front)) {
        printf("Queue is empty!\n");
    } else {
        printf("Front element is: %d\n", (*front)->data);
    }
}

// Function to display all elements in the queue
void display(struct Node** front) {
    if (isEmpty(front)) {
        printf("Queue is empty!\n");
    } else {
        struct Node* current = *front;
        printf("Queue elements: ");
        while (current != NULL) {
            printf("%d ", current->data);
            current = current->next;
        }
        printf("\n");
    }
}

int main() {
    struct Node* front;
    struct Node* rear;

    // Initialize the queue
    initQueue(&front, &rear);

    int choice, value;

    while (1) {
        printf("\n1. Enqueue\n2. Dequeue\n3. Peek\n4. Display\n5. Exit\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to enqueue: ");
                scanf("%d", &value);
                enqueue(&front, &rear, value);
                break;

            case 2:
                dequeue(&front, &rear);
                break;

            case 3:
                peek(&front);
                break;

            case 4:
                display(&front);
                break;

            case 5:
                exit(0);

            default:
                printf("Invalid choice, please try again.\n");
        }
    }

    return 0;
}
