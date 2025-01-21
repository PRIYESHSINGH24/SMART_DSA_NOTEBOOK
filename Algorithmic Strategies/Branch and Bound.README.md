# <div align="Center">Branch and Bound</div>
## Branch and Bound is an algorithmic technique for solving optimization problems, where the solution space is systematically divided into smaller subproblems (branching), and bounds are used to eliminate subproblems that cannot lead to better solutions (bounding). This process helps in efficiently exploring the search space and finding the optimal solution while pruning unpromising paths. It is commonly applied to combinatorial problems like the Traveling Salesman Problem, 0/1 Knapsack Problem, and Integer Programming.

### Example:
### 1. Traveling Salesman Problem (TSP)
### 2. 0/1 Knapsack Problem
### 3. Integer Linear Programming (ILP)

<hr>

### For Example : 0/1 Knapsack Problem: Branch and Bound in C
```
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int level;
    int value;
    int weight;
    float bound;
} Node;

// Function to calculate the upper bound of a node
float calculateBound(Node *node, int n, int W, int items[][2]) {
    if (node->weight >= W)
        return 0;  // If the weight exceeds the capacity, the bound is zero

    float bound = node->value;
    int totalWeight = node->weight;
    int i = node->level + 1;
    
    // Take as many items as possible (greedy approach)
    while (i < n && totalWeight + items[i][1] <= W) {
        totalWeight += items[i][1];
        bound += items[i][0];
        i++;
    }
    
    // If there is still capacity, take the fraction of the next item
    if (i < n)
        bound += (W - totalWeight) * (float)items[i][0] / items[i][1];
    
    return bound;
}

// Function to solve the 0/1 Knapsack problem using Branch and Bound
int knapsackBranchBound(int W, int items[][2], int n) {
    Node *queue = (Node *)malloc(n * sizeof(Node));  // Queue for the nodes
    int front = 0, rear = 0;  // Queue pointers
    int maxValue = 0;  // Variable to store the maximum value found
    
    // Root node initialization (level = -1, value = 0, weight = 0, bound = 0)
    Node root = {-1, 0, 0, 0.0};
    root.bound = calculateBound(&root, n, W, items);
    
    queue[rear++] = root;
    
    while (front < rear) {
        Node current = queue[front++];
        
        // If the bound of this node is greater than the max value, explore its children
        if (current.bound > maxValue) {
            // Case 1: Include the current item
            if (current.level + 1 < n) {
                Node nextNode = {current.level + 1, current.value + items[current.level + 1][0],
                                 current.weight + items[current.level + 1][1], 0};
                if (nextNode.weight <= W) {
                    nextNode.bound = calculateBound(&nextNode, n, W, items);
                    if (nextNode.value > maxValue)
                        maxValue = nextNode.value;
                    queue[rear++] = nextNode;
                }
            }
            
            // Case 2: Exclude the current item
            if (current.level + 1 < n) {
                Node nextNode = {current.level + 1, current.value, current.weight, 0};
                nextNode.bound = calculateBound(&nextNode, n, W, items);
                queue[rear++] = nextNode;
            }
        }
    }
    
    free(queue);
    return maxValue;
}

int main() {
    // Items as (value, weight) pairs
    int items[3][2] = {{60, 10}, {100, 20}, {120, 30}};
    int W = 50;  // Knapsack capacity
    int n = sizeof(items) / sizeof(items[0]);  // Number of items
    
    int maxValue = knapsackBranchBound(W, items, n);
    printf("Maximum value in Knapsack = %d\n", maxValue);
    
    return 0;
}

```

### Output:
```
Maximum value in Knapsack = 220 

```
