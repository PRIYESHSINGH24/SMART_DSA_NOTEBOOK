// Problem: Construct an Optimal Binary Search Tree with minimal search cost
#include <stdio.h>
#include <limits.h>

int optimalBST(int keys[], int freq[], int n) {
    int cost[n][n];

    for (int i = 0; i < n; i++) {
        cost[i][i] = freq[i];
    }

    for (int length = 2; length <= n; length++) {
        for (int i = 0; i <= n - length; i++) {
            int j = i + length - 1;
            cost[i][j] = INT_MAX;

            for (int r = i; r <= j; r++) {
                int c = ((r > i) ? cost[i][r - 1] : 0) + ((r < j) ? cost[r + 1][j] : 0) + sum(freq, i, j);
                cost[i][j] = (c < cost[i][j]) ? c : cost[i][j];
            }
        }
    }

    return cost[0][n - 1];
}

int main() {
    int keys[] = {10, 20, 30, 40};
    int freq[] = {4, 2, 6, 3};
    int n = sizeof(keys) / sizeof(keys[0]);

    printf("Optimal BST cost: %d\n", optimalBST(keys, freq, n));
    return 0;
}
