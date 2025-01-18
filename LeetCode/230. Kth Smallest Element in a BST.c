/**
 * Definition for a binary tree node.*/
 struct TreeNode {
      int val;
      struct TreeNode *left;
      struct TreeNode *right;
  };

#include <stdbool.h>


struct Solution {
    struct TreeNode* stack[1000]; // Assuming the stack size is sufficient
    int top;
};

void init(struct Solution* sol) {
    sol->top = 0;
}

void push(struct Solution* sol, struct TreeNode* node) {
    sol->stack[sol->top++] = node;
}

struct TreeNode* pop(struct Solution* sol) {
    return sol->stack[--sol->top];
}

int kthSmallest(struct TreeNode* root, int k) {
    struct Solution sol;
    init(&sol);
    struct TreeNode* stack[1000]; // Assuming the stack size is sufficient
    int top = 0;
    
    while (true) {
        while (root) {
            push(&sol, root);
            root = root->left;
        }
        root = pop(&sol);
        k--;
        if (k == 0) {
            return root->val;
        }
        root = root->right;
    }
}



