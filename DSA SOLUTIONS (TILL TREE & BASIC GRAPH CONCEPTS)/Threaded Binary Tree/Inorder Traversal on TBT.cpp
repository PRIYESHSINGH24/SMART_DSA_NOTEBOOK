#include <iostream>
using namespace std;

struct tbt {
    int data;
    int lbit, rbit;
    struct tbt *left, *right;
};

class ThreadedBinaryTree {
private:
    tbt *root;
    tbt *dummynode;

public:
    ThreadedBinaryTree() {
        root = NULL;
        dummynode = NULL;
    }

    tbt* createNode(int data) {
        tbt* newnode = new tbt;
        newnode->left = newnode->right = NULL;
        newnode->lbit = newnode->rbit = 1;
        newnode->data = data;
        return newnode;
    }

    void create(int data) {
        if (data == -1) return; 

        tbt* newnode = createNode(data);
        if (root == NULL) {
            root = newnode;
            dummynode = new tbt;
            dummynode->data = -999;
            dummynode->left = root;
            dummynode->right = dummynode;
            root->left = root->right = dummynode;
        } else {
            insert(root, newnode);
        }
    }

    void insert(tbt *root, tbt *newnode) {
        if (newnode->data < root->data) {
            if (root->lbit == 1) {
                newnode->left = root->left;
                newnode->right = root;
                root->left = newnode;
                root->lbit = 0;
            } else {
                insert(root->left, newnode);
            }
        } else if (newnode->data > root->data) {
            if (root->rbit == 1) {
                newnode->right = root->right;
                newnode->left = root;
                root->rbit = 0;
                root->right = newnode;
            } else {
                insert(root->right, newnode);
            }
        }
    }

    void inorder() {
        tbt *temp = root;
        while (temp != dummynode) {
            while (temp->lbit == 0) {
                temp = temp->left;
            }
            cout << " " << temp->data;
            while (temp->rbit == 1) {
                temp = temp->right;
                if (temp == dummynode) return;
                cout << " " << temp->data;
            }
            temp = temp->right;
        }
    }
};

int main() {
    ThreadedBinaryTree tree;
    int data;

    cout << "Enter nodes:- ";
    while (true) {
        cin >> data;
        if (data == -1) break; 
        tree.create(data);
    }

    cout << "\nInorder Traversal: ";
    tree.inorder();

    return 0;
}
