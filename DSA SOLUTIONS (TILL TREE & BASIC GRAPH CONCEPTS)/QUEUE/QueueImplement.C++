#include <iostream>
using namespace std;

#define MAX 1000 // Maximum size of the queue

class Queue {
private:
    int front, rear, size;
    int arr[MAX]; // Queue array

public:
    // Constructor to initialize the queue
    Queue() {
        front = 0;
        rear = -1;
        size = 0;
    }

    // Function to check if the queue is empty
    bool isEmpty() {
        return size == 0;
    }

    // Function to check if the queue is full
    bool isFull() {
        return size == MAX;
    }

    // Function to add an element to the queue
    bool enqueue(int value) {
        if (isFull()) {
            cout << "Queue Overflow\n";
            return false;
        }
        rear = (rear + 1) % MAX; // Circular increment
        arr[rear] = value;
        size++;
        return true;
    }

    // Function to remove an element from the queue
    int dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow\n";
            return -1;
        }
        int value = arr[front];
        front = (front + 1) % MAX; // Circular increment
        size--;
        return value;
    }

    // Function to get the front element of the queue
    int getFront() {
        if (isEmpty()) {
            cout << "Queue is Empty\n";
            return -1;
        }
        return arr[front];
    }

    // Function to get the rear element of the queue
    int getRear() {
        if (isEmpty()) {
            cout << "Queue is Empty\n";
            return -1;
        }
        return arr[rear];
    }

    // Function to display all elements in the queue
    void display() {
        if (isEmpty()) {
            cout << "Queue is Empty\n";
            return;
        }
        cout << "Queue elements are: ";
        for (int i = 0; i < size; i++) {
            cout << arr[(front + i) % MAX] << " ";
        }
        cout << endl;
    }
};

int main() {
    Queue q;

    // Demonstrating queue operations
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    cout << "Front element is: " << q.getFront() << endl;
    cout << "Rear element is: " << q.getRear() << endl;

    q.display();

    cout << "Dequeued element: " << q.dequeue() << endl;

    q.display();

    if (q.isEmpty()) {
        cout << "Queue is empty\n";
    } else {
        cout << "Queue is not empty\n";
    }

    return 0;
}
