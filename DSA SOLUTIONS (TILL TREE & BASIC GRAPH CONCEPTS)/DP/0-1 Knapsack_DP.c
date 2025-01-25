// 0-1 Knapsack Problem using Dynamic Programming
// Simplified Memoization and Tabulation approaches

#include <stdio.h>
#include <string.h> 

// --- MEMOIZATION APPROACH ---
int knapsackMemo(int W, int weights[], int values[], int n, int dp[][1001]) {
    if (n == 0 || W == 0) return 0; // Base case

    if (dp[n][W] != -1) return dp[n][W]; // Return stored result

    if (weights[n - 1] > W) // Skip the item if weight exceeds capacity
        return dp[n][W] = knapsackMemo(W, weights, values, n - 1, dp);

    // Include or exclude the item
    int include = values[n - 1] + knapsackMemo(W - weights[n - 1], weights, values, n - 1, dp);
    int exclude = knapsackMemo(W, weights, values, n - 1, dp);

    return dp[n][W] = (include > exclude) ? include : exclude;
}

// --- TABULATION APPROACH ---
int knapsackTab(int W, int weights[], int values[], int n) {
    int dp[n + 1][W + 1];

    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            if (i == 0 || w == 0) // Base case
                dp[i][w] = 0;
            else if (weights[i - 1] <= w) {
                int include = values[i - 1] + dp[i - 1][w - weights[i - 1]];
                int exclude = dp[i - 1][w];
                dp[i][w] = (include > exclude) ? include : exclude;
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][W];
}

int main() {
    int n, W;

    printf("Enter number of items: ");
    scanf("%d", &n);

    int weights[n], values[n];

    printf("Enter weights of items: ");
    for (int i = 0; i < n; i++) scanf("%d", &weights[i]);

    printf("Enter values of items: ");
    for (int i = 0; i < n; i++) scanf("%d", &values[i]);

    printf("Enter capacity of knapsack: ");
    scanf("%d", &W);

    // Memoization
    int dp[101][1001]; // Assuming maximum items = 100, maximum capacity = 1000
    memset(dp, -1, sizeof(dp));
    printf("Maximum value (Memoization): %d\n", knapsackMemo(W, weights, values, n, dp));

    // Tabulation
    printf("Maximum value (Tabulation): %d\n", knapsackTab(W, weights, values, n));

    return 0;
}
