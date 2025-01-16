#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Define a binary tree node
typedef struct TreeNode {
    int value;
    int left_weight;
    int right_weight;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

// Create a new tree node
TreeNode* createNode(int value) {
    TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));
    newNode->value = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->left_weight = INT_MAX;  // Default weight for left edge
    newNode->right_weight = INT_MAX; // Default weight for right edge
    return newNode;
}

// Dijkstra's algorithm for binary tree
void dijkstra(TreeNode* root, int target) {
    if (root == NULL) {
        printf("The tree is empty.\n");
        return;
    }

    // Priority queue replacement using a simple array
    // We use a small fixed-size array for simplicity in this example
    TreeNode* queue[100];
    int distances[100];
    int visited[100];
    int size = 0;

    // Initialize queue and distances
    queue[size] = root;
    distances[size] = 0; // Distance to root is 0
    visited[size] = 0;
    size++;

    while (size > 0) {
        // Find the node with the smallest distance
        int minIndex = 0;
        for (int i = 1; i < size; i++) {
            if (!visited[i] && distances[i] < distances[minIndex]) {
                minIndex = i;
            }
        }

        // Visit the selected node
        TreeNode* current = queue[minIndex];
        int currentDistance = distances[minIndex];
        visited[minIndex] = 1;

        // If the target is reached, stop
        if (current->value == target) {
            printf("Shortest path to %d: %d\n", target, currentDistance);
            return;
        }

        // Remove the visited node from the queue
        for (int i = minIndex; i < size - 1; i++) {
            queue[i] = queue[i + 1];
            distances[i] = distances[i + 1];
            visited[i] = visited[i + 1];
        }
        size--;

        // Process the left child
        if (current->left != NULL) {
            int newDistance = currentDistance + current->left_weight;
            int exists = 0;
            for (int i = 0; i < size; i++) {
                if (queue[i] == current->left) {
                    if (newDistance < distances[i]) {
                        distances[i] = newDistance;
                    }
                    exists = 1;
                    break;
                }
            }
            if (!exists) {
                queue[size] = current->left;
                distances[size] = newDistance;
                visited[size] = 0;
                size++;
            }
        }

        // Process the right child
        if (current->right != NULL) {
            int newDistance = currentDistance + current->right_weight;
            int exists = 0;
            for (int i = 0; i < size; i++) {
                if (queue[i] == current->right) {
                    if (newDistance < distances[i]) {
                        distances[i] = newDistance;
                    }
                    exists = 1;
                    break;
                }
            }
            if (!exists) {
                queue[size] = current->right;
                distances[size] = newDistance;
                visited[size] = 0;
                size++;
            }
        }
    }

    printf("Target %d not found in the tree.\n", target);
}

// Test the implementation
int main() {
    TreeNode* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);
    root->left_weight = 4;
    root->right_weight = 2;

    root->left->left = createNode(4);
    root->left->right = createNode(5);
    root->left->left_weight = 7;
    root->left->right_weight = 1;

    root->right->left = createNode(6);
    root->right->right = createNode(7);
    root->right->left_weight = 3;
    root->right->right_weight = 5;

    int target = 7;
    dijkstra(root, target);

    return 0;
}
