// C Program to Check if a Binary Tree is 
// subtree of another binary tree

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

// Utility function to check if two trees are identical
int areIdentical(struct Node* root1, struct Node* root2) {
    if (root1 == NULL && root2 == NULL)
        return 1;
    if (root1 == NULL || root2 == NULL)
        return 0;

    // Check if data and left/right subtrees are identical
    return (root1->data == root2->data &&
            areIdentical(root1->left, root2->left) &&
            areIdentical(root1->right, root2->right));
}

// Function to check if root2 is a subtree of root1
int isSubtree(struct Node* root1, struct Node* root2) {
    if (root2 == NULL)
        return 1; 
    if (root1 == NULL)
        return 0; 
  
    // Check if the current node of root1 matches
      // the root of root2
    if (areIdentical(root1, root2))
        return 1;

    // Recur for left and right subtrees of root1
    return isSubtree(root1->left, root2) 
      || isSubtree(root1->right, root2);
}

struct Node* createNode(int value) {
    struct Node* newNode = 
          (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->left = newNode->right = NULL;
    return newNode;
}

int main() {
  
    // Construct Tree root1
    //          26
    //         /  \
    //        10   3
    //       / \    \
    //      4   6    3
    //       \
    //        30
    struct Node* root1 = createNode(26);
    root1->right = createNode(3);
    root1->right->right = createNode(3);
    root1->left = createNode(10);
    root1->left->left = createNode(4);
    root1->left->left->right = createNode(30);
    root1->left->right = createNode(6);

    // Construct Tree root2
    //          10
    //         /  \
    //        4    6
    //         \
    //          30
    struct Node* root2 = createNode(10);
    root2->right = createNode(6);
    root2->left = createNode(4);
    root2->left->right = createNode(30);

    if (isSubtree(root1, root2))
        printf("true");
    else
        printf("false");

    return 0;
}