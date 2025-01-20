#include <stdio.h>
#include <stdlib.h>

struct list {
    int data;
    struct list *next;
    struct list *prev;
} *head = NULL, *tail = NULL;

void init() {
    head = NULL;
    tail = NULL;
}

void print() {
    struct list *temp = head;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

void linkedlist_start(int val) {
    struct list *p = (struct list *)malloc(sizeof(struct list));
    p->data = val;
    p->next = head;
    p->prev = NULL;
    if (head != NULL) {
        head->prev = p;
    } else {
        tail = p;
    }
    head = p;
}

void linkedlist_end(int val) {
    struct list *p = (struct list *)malloc(sizeof(struct list));
    p->data = val;
    p->next = NULL;
    if (tail != NULL) {
        tail->next = p;
        p->prev = tail;
    } else {
        head = p;
    }
    tail = p;
}

void linkedlist_k(int val, int k) {
    struct list *p = (struct list *)malloc(sizeof(struct list));
    p->data = val;
    if (k == 1) {
        linkedlist_start(val);
    } else if (k == 2) {
        linkedlist_end(val);
    } else {
        struct list *temp = head;
        for (int i = 1; i < k - 1 && temp->next != NULL; i++) {
            temp = temp->next;
        }
        if (temp->next == NULL) {
            temp->next = p;
            p->prev = temp;
            p->next = NULL;
            tail = p;
        } else {
            p->next = temp->next;
            p->prev = temp;
            temp->next->prev = p;
            temp->next = p;
        }
    }
}

void del(int k) {
    struct list *temp;
    if (head == NULL) {
        printf("List is empty\n");
        return;
    } else if (k == 1) {
        temp = head;
        if (head->next == NULL) {
            head = NULL;
        } else {
            head = head->next;
            head->prev = NULL;
        }
        printf("%d deleted\n", temp->data);
        free(temp);
    } else {
        temp = head;
        for (int i = 1; i < k - 1 && temp->next != NULL; i++) {
            temp = temp->next;
        }
        if (temp->next != NULL) {
            temp->next->prev = temp->prev;
            temp->prev->next = temp->next;
        } else {
            temp->prev->next = NULL;
        }
        printf("%d deleted\n", temp->data);
        free(temp);
    }
}

void menu() {
    int choice, val, k;
    while (1) {
        printf("Menu:\n");
        printf("1. Insert at start\n");
        printf("2. Insert at end\n");
        printf("3. Insert at position k\n");
        printf("4. Print the list\n");
        printf("5. Delete a node\n");
        printf("6. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Enter value: ");
                scanf("%d", &val);
                linkedlist_start(val);
                break;
            case 2:
                printf("Enter value: ");
                scanf("%d", &val);
                linkedlist_end(val);
                break;
            case 3:
                printf("Enter value: ");
                scanf("%d", &val);
                printf("Enter position: ");
                scanf("%d", &k);
                linkedlist_k(val, k);
                break;
            case 4:
                print();
                break;
            case 5:
                printf("Enter position to delete: ");
                scanf("%d", &k);
                del(k);
                break;
            case 6:
                exit(0);
            default:
                printf("Invalid choice\n");
        }
    }
}

int main() {
    init();
    menu();
    return 0;
}
