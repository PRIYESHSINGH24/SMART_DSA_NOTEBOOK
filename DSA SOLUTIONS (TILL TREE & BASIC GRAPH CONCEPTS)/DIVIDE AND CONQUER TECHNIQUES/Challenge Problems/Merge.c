// Problem: Find the minimum cost to merge files
#include <stdio.h>
#include <limits.h>

int minCostToMergeFiles(int files[], int n) {
    int dp[n][n], sum[n + 1];
    sum[0] = 0;
    for (int i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + files[i];
    }

    for (int i = 0; i < n; i++) {
        dp[i][i] = 0;
    }

    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                dp[i][j] = (dp[i][j] < dp[i][k] + dp[k + 1][j] + sum[j + 1] - sum[i]) ? dp[i][j] : dp[i][k] + dp[k + 1][j] + sum[j + 1] - sum[i];
            }
        }
    }

    return dp[0][n - 1];
}

int main() {
    int files[] = {40, 20, 30, 10};
    int n = sizeof(files) / sizeof(files[0]);
    printf("Minimum Cost to Merge Files: %d\n", minCostToMergeFiles(files, n));
    return 0;
}
