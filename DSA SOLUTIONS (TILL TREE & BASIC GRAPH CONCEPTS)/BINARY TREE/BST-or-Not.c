// C program to check if a tree is BST
// Using specified range of Min and Max Values

#include <stdio.h>
#include <limits.h>
#include <stdbool.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

// Helper function to check if a tree is BST within a given range
bool isBSTUtil(struct Node* node, int min, int max) {
    if (node == NULL) return true;

    // If the current node's data 
    // is not in the valid range, return false
    if (node->data < min || node->data > max) return false;

    // Recursively check the left and 
    // right subtrees with updated ranges
    return isBSTUtil(node->left, min, node->data - 1) &&
           isBSTUtil(node->right, node->data + 1, max);
}

// Function to check if the entire binary tree is a BST
bool isBST(struct Node* root) {
    return isBSTUtil(root, INT_MIN, INT_MAX);
}

struct Node* createNode(int value) {
    struct Node* newNode = 
      (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->left = newNode->right = NULL;
    return newNode;
}

int main() {
  
    // Create a sample binary tree
    //      4
    //    /   \
    //   2     5
    //  / \
    // 1   3

    struct Node* root = createNode(4);
    root->left = createNode(2);
    root->right = createNode(5);
    root->left->left = createNode(1);
    root->left->right = createNode(3);

    if (isBST(root)) 
        printf("True");
    else 
         printf("False");
    
    return 0;
}