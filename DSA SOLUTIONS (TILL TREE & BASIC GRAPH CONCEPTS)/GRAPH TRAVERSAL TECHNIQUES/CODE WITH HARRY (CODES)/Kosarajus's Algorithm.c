/*
Steps of Kosaraju's Algorithm:
1. Perform a Depth First Search (DFS) on the original graph and store the nodes in a stack based on their finish times.
2. Reverse the graph by transposing its adjacency matrix (reverse all edges).
3. Perform DFS on the transposed graph in the order of nodes stored in the stack.
4. Each DFS traversal on the transposed graph gives a strongly connected component (SCC).

Uses of Kosaraju's Algorithm:
- To find strongly connected components (SCCs) in a directed graph.
- SCCs are useful in understanding the modular structure of graphs, deadlock detection, and other graph-related problems.
*/

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX 1000

typedef struct Stack {
    int data[MAX];
    int top;
} Stack;

void initStack(Stack* stack) {
    stack->top = -1;
}

void push(Stack* stack, int value) {
    if (stack->top < MAX - 1) {
        stack->data[++stack->top] = value;
    }
}

int pop(Stack* stack) {
    if (stack->top >= 0) {
        return stack->data[stack->top--];
    }
    return -1;
}

bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

void dfs(int node, bool visited[], int adj[][MAX], int n, Stack* stack) {
    visited[node] = true;
    for (int i = 0; i < n; i++) {
        if (adj[node][i] && !visited[i]) {
            dfs(i, visited, adj, n, stack);
        }
    }
    push(stack, node);
}

void dfsTranspose(int node, bool visited[], int transpose[][MAX], int n) {
    visited[node] = true;
    printf("%d ", node);
    for (int i = 0; i < n; i++) {
        if (transpose[node][i] && !visited[i]) {
            dfsTranspose(i, visited, transpose, n);
        }
    }
}

void kosaraju(int adj[][MAX], int n) {
    Stack stack;
    initStack(&stack);
    bool visited[MAX] = { false };
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, visited, adj, n, &stack);
        }
    }
    int transpose[MAX][MAX] = { 0 };
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            transpose[j][i] = adj[i][j];
        }
    }
    for (int i = 0; i < n; i++) visited[i] = false;
    printf("Strongly Connected Components:\n");
    while (!isEmpty(&stack)) {
        int node = pop(&stack);
        if (!visited[node]) {
            dfsTranspose(node, visited, transpose, n);
            printf("\n");
        }
    }
}

int main() {
    int n, e;
    printf("Enter the number of vertices: ");
    scanf("%d", &n);
    printf("Enter the number of edges: ");
    scanf("%d", &e);
    int adj[MAX][MAX] = { 0 };
    printf("Enter the edges (u v):\n");
    for (int i = 0; i < e; i++) {
        int u, v;
        scanf("%d %d", &u, &v);
        adj[u][v] = 1;
    }
    kosaraju(adj, n);
    return 0;
}
