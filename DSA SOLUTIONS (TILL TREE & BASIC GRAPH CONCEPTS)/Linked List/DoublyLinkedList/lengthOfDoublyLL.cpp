#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;
    Node* prev;

    Node(int val) {
        data = val;
        next = nullptr;
        prev = nullptr;
    }
};

class DoublyLinkedList {
public:
    Node* head;

    DoublyLinkedList() {
        head = nullptr;
    }

    void insertAtHead(int val) {
        Node* newNode = new Node(val);
        if (head == nullptr) {
            head = newNode;
            return;
        }
        newNode->next = head;
        head->prev = newNode;
        head = newNode;
    }

    void insertAtTail(int val) {
        Node* newNode = new Node(val);
        if (head == nullptr) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->prev = temp;
    }

    void insertAtPosition(int val, int pos) {
        if (pos == 0) {
            insertAtHead(val);
            return;
        }

        Node* newNode = new Node(val);
        Node* temp = head;
        int current_pos = 0;

        while (temp != nullptr && current_pos != pos - 1) {
            temp = temp->next;
            current_pos++;
        }

        if (temp == nullptr) {
            cout << "Position out of bounds.\n";
            delete newNode;
            return;
        }

        newNode->next = temp->next;
        newNode->prev = temp;

        if (temp->next != nullptr) {
            temp->next->prev = newNode;
        }
        temp->next = newNode;
    }

    void deleteAtHead() {
        if (head == nullptr) {
            cout << "List is empty!\n";
            return;
        }
        Node* temp = head;
        head = head->next;
        if (head != nullptr) {
            head->prev = nullptr;
        }
        delete temp;
    }

    void deleteAtTail() {
        if (head == nullptr) {
            cout << "List is empty!\n";
            return;
        }

        if (head->next == nullptr) {
            delete head;
            head = nullptr;
            return;
        }

        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }

        temp->prev->next = nullptr;
        delete temp;
    }

    void deleteAtPosition(int pos) {
        if (head == nullptr) {
            cout << "List is empty!\n";
            return;
        }

        if (pos == 0) {
            deleteAtHead();
            return;
        }

        Node* temp = head;
        int current_pos = 0;

        while (temp != nullptr && current_pos != pos) {
            temp = temp->next;
            current_pos++;
        }

        if (temp == nullptr) {
            cout << "Position out of bounds.\n";
            return;
        }

        if (temp->prev != nullptr) {
            temp->prev->next = temp->next;
        }

        if (temp->next != nullptr) {
            temp->next->prev = temp->prev;
        }

        delete temp;
    }

    int findLength() {
        int length = 0;
        Node* temp = head;
        while (temp != nullptr) {
            length++;
            temp = temp->next;
        }
        return length;
    }

    void printList() {
        if (head == nullptr) {
            cout << "List is empty.\n";
            return;
        }
        Node* temp = head;
        while (temp != nullptr) {
            cout << temp->data << " <-> ";
            temp = temp->next;
        }
        cout << "NULL\n";
    }
};

int main() {
    DoublyLinkedList list;
    int choice, value, position;

    do {
        cout << "\nMenu:\n";
        cout << "1. Insert at Head\n";
        cout << "2. Insert at Tail\n";
        cout << "3. Insert at Position\n";
        cout << "4. Delete at Head\n";
        cout << "5. Delete at Tail\n";
        cout << "6. Delete at Position\n";
        cout << "7. Print List\n";
        cout << "8. Find Length of List\n";
        cout << "9. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter value to insert at head: ";
                cin >> value;
                list.insertAtHead(value);
                break;

            case 2:
                cout << "Enter value to insert at tail: ";
                cin >> value;
                list.insertAtTail(value);
                break;

            case 3:
                cout << "Enter value to insert: ";
                cin >> value;
                cout << "Enter position: ";
                cin >> position;
                list.insertAtPosition(value, position);
                break;

            case 4:
                list.deleteAtHead();
                break;

            case 5:
                list.deleteAtTail();
                break;

            case 6:
                cout << "Enter position to delete: ";
                cin >> position;
                list.deleteAtPosition(position);
                break;

            case 7:
                list.printList();
                break;

            case 8:
                cout << "Length of the list: " << list.findLength() << endl;
                break;

            case 9:
                cout << "Exiting...\n";
                break;

            default:
                cout << "Invalid choice, try again.\n";
        }
    } while (choice != 9);

    return 0;
}
