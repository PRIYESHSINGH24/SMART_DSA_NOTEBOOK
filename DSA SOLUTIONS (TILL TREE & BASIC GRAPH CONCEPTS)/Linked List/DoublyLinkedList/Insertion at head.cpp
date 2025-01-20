#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* left;
    Node* right;

    Node(int val) {
        data = val;
        left = NULL;
        right = NULL;
    }
};

void createDoublyLinkedList(Node*& first, Node*& last) {
    int val;
    cout << "Enter values for the list (-1 to stop): ";
    while (true) {
        cin >> val;
        if (val == -1) break;

        Node* new_node = new Node(val);
        if (first == NULL) {
            first = last = new_node;
        } else {
            last->right = new_node;
            new_node->left = last;
            last = new_node;
        }
    }
    cout << "Doubly linked list created successfully!" << endl;
}

void insertAtHead(Node*& first, Node*& last, int val) {
    Node* new_node = new Node(val);
    if (first == NULL) {
        first = last = new_node;
    } else {
        new_node->right = first;
        first->left = new_node;
        first = new_node;
    }
    cout << "Inserted " << val << " at the head of the list." << endl;
}

void display(Node* first) {
    cout << "Displaying list from first to last: ";
    Node* temp = first;
    while (temp != NULL) {
        cout << temp->data << " <-> ";
        temp = temp->right;
    }
    cout << "NULL" << endl;
}

int main() {
    Node* first = NULL;
    Node* last = NULL;

    createDoublyLinkedList(first, last);
    display(first);

    int val;
    cout << "Enter value to insert at head: ";
    cin >> val;
    insertAtHead(first, last, val);
    display(first);

    return 0;
}
