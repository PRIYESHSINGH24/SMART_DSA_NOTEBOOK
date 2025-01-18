#include <stdio.h>
#include <stdlib.h>

// Definition for a singly-linked list node.
struct ListNode {
    int val;
    struct ListNode *next;
};

// Helper function to create a new node.
struct ListNode* createNode(int val) {
    struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
    newNode->val = val;
    newNode->next = NULL;
    return newNode;
}

// Function to merge two sorted linked lists.
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1->val < l2->val) {
        l1->next = mergeTwoLists(l1->next, l2);
        return l1;
    } else {
        l2->next = mergeTwoLists(l1, l2->next);
        return l2;
    }
}

// Function to merge k sorted linked lists.
struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    if (listsSize == 0) return NULL;
    if (listsSize == 1) return lists[0];
    
    int mid = listsSize / 2;
    struct ListNode* left = mergeKLists(lists, mid);
    struct ListNode* right = mergeKLists(lists + mid, listsSize - mid);
    return mergeTwoLists(left, right);
}

// Helper function to print a linked list.
void printList(struct ListNode* head) {
    while (head) {
        printf("%d ", head->val);
        head = head->next;
    }
    printf("\n");
}

// Example usage.
int main() {
    // Create sample linked lists.
    struct ListNode* l1 = createNode(1);
    l1->next = createNode(4);
    l1->next->next = createNode(5);

    struct ListNode* l2 = createNode(1);
    l2->next = createNode(3);
    l2->next->next = createNode(4);

    struct ListNode* l3 = createNode(2);
    l3->next = createNode(6);

    struct ListNode* lists[] = {l1, l2, l3};
    int listsSize = sizeof(lists) / sizeof(lists[0]);

    // Merge the linked lists.
    struct ListNode* result = mergeKLists(lists, listsSize);

    // Print the merged linked list.
    printList(result);

    return 0;
}
