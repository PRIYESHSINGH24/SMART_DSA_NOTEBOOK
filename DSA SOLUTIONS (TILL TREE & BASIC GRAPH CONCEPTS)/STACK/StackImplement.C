#include <iostream>
using namespace std;

#define MAX 1000 // Maximum size of the stack

class Stack {
private:
    int top;
    int arr[MAX]; // Stack array

public:
    // Constructor to initialize stack
    Stack() {
        top = -1;
    }

    // Function to push an element onto the stack
    bool push(int value) {
        if (top >= MAX - 1) {
            cout << "Stack Overflow\n";
            return false;
        }
        arr[++top] = value;
        return true;
    }

    // Function to pop the top element from the stack
    int pop() {
        if (top < 0) {
            cout << "Stack Underflow\n";
            return -1;
        }
        return arr[top--];
    }

    // Function to get the top element of the stack
    int peek() {
        if (top < 0) {
            cout << "Stack is Empty\n";
            return -1;
        }
        return arr[top];
    }

    // Function to check if the stack is empty
    bool isEmpty() {
        return top < 0;
    }

    // Function to display all elements in the stack
    void display() {
        if (isEmpty()) {
            cout << "Stack is Empty\n";
            return;
        }
        cout << "Stack elements are: ";
        for (int i = 0; i <= top; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Stack s;

    // Demonstrating stack operations
    s.push(10);
    s.push(20);
    s.push(30);

    cout << "Top element is: " << s.peek() << endl;

    s.display();

    cout << "Popped element: " << s.pop() << endl;

    s.display();

    if (s.isEmpty()) {
        cout << "Stack is empty\n";
    } else {
        cout << "Stack is not empty\n";
    }

    return 0;
}
