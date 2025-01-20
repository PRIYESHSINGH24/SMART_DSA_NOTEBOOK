#include <iostream>
using namespace std;

class Node {
public:
    int val;
    Node* next;
    Node* prev;

    Node(int data) {
        val = data;
        next = nullptr;
        prev = nullptr;
    }
};

void insertAtHead(Node*& head, int val) {
    Node* new_node = new Node(val);
    if (head == nullptr) {
        head = new_node;
    } else {
        new_node->next = head;
        head->prev = new_node;
        head = new_node;
    }
}

void insertAtTail(Node*& head, int val) {
    Node* new_node = new Node(val);
    
    if (head == nullptr) {
        head = new_node;
        return;
    }

    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = new_node;
    new_node->prev = temp;
}

void insertAtK(Node*& head, int val, int pos) {
    if (pos == 0) {
        insertAtHead(head, val);
        return;
    }

    Node* new_node = new Node(val);
    Node* temp = head;
    int current_pos = 0;

    while (current_pos != pos - 1 && temp != nullptr) {
        temp = temp->next;
        current_pos++;
    }

    if (temp == nullptr) {
        cout << "Position out of bounds." << endl;
        delete new_node;  
        return;
    }

    new_node->next = temp->next;
    new_node->prev = temp;

    if (temp->next != nullptr) {
        temp->next->prev = new_node;
    }
    temp->next = new_node;
}

void display(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        cout << temp->val << " <-> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}

void reverseDisplay(Node* head) {
    if (head == nullptr) return;

    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }

    while (temp != nullptr) {
        cout << temp->val << " <-> ";
        temp = temp->prev;
    }
    cout << "NULL" << endl;
}

int main() {
    Node* head = nullptr;

    insertAtHead(head, 1);
    display(head);
    insertAtTail(head, 2);
    display(head);
    insertAtTail(head, 3);
    display(head);
    insertAtTail(head, 4);
    display(head);
    insertAtTail(head, 5);
    display(head);

    insertAtK(head, 323, 2);
    display(head);

    cout << "Reversed List: ";
    reverseDisplay(head);

    // Free the allocated memory
    Node* temp;
    while (head != nullptr) {
        temp = head;
        head = head->next;
        delete temp;
    }

    return 0;
}
