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

void insertAtEnd(Node*& first, Node*& last, int val) {
    Node* new_node = new Node(val);
    if (first == NULL) {
        first = last = new_node;
    } else {
        last->right = new_node;
        new_node->left = last;
        last = new_node;
    }
}

void deleteAtBeginning(Node*& first, Node*& last) {
    if (first == NULL) {
        cout << "List is empty!" << endl;
        return;
    }

    Node* temp = first;
    first = first->right;
    if (first != NULL) {
        first->left = NULL;
    } else {
        last = NULL;
    }
    delete temp;
}

void deleteAtEnd(Node*& first, Node*& last) {
    if (last == NULL) {
        cout << "List is empty!" << endl;
        return;
    }

    Node* temp = last;
    last = last->left;
    if (last != NULL) {
        last->right = NULL;
    } else {
        first = NULL;
    }
    delete temp;
}

void deleteAtPosition(Node*& first, Node*& last, int position) {
    if (first == NULL) {
        cout << "List is empty!" << endl;
        return;
    }

    if (position == 1) {
        deleteAtBeginning(first, last);
        return;
    }

    Node* temp = first;
    int count = 1;

    while (temp != NULL && count < position) {
        temp = temp->right;
        count++;
    }

    if (temp == NULL) {
        cout << "Position out of range!" << endl;
        return;
    }

    if (temp->left != NULL) {
        temp->left->right = temp->right;
    }

    if (temp->right != NULL) {
        temp->right->left = temp->left;
    } else {
        last = temp->left;
    }

    delete temp;
}

void display(Node* first) {
    if (first == NULL) {
        cout << "List is empty!" << endl;
        return;
    }
    
    cout << "Displaying list from first to last: ";
    Node* temp = first;
    while (temp != NULL) {
        cout << temp->data << " <-> ";
        temp = temp->right;
    }
    cout << "NULL" << endl;
}

void menu() {
    Node* first = NULL;
    Node* last = NULL;
    int choice, value, position;

    do {
        cout << "\n--- Doubly Linked List Menu ---" << endl;
        cout << "1. Insert at End" << endl;
        cout << "2. Delete from Beginning" << endl;
        cout << "3. Delete from End" << endl;
        cout << "4. Delete at Position" << endl;
        cout << "5. Display List" << endl;
        cout << "6. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value to insert: ";
                cin >> value;
                insertAtEnd(first, last, value);
                break;
            case 2:
                deleteAtBeginning(first, last);
                break;
            case 3:
                deleteAtEnd(first, last);
                break;
            case 4:
                cout << "Enter position to delete: ";
                cin >> position;
                deleteAtPosition(first, last, position);
                break;
            case 5:
                display(first);
                break;
            case 6:
                cout << "Exiting program..." << endl;
                break;
            default:
                cout << "Invalid choice! Please try again." << endl;
        }
    } while (choice != 6);
}

int main() {
    menu();
    return 0;
}
