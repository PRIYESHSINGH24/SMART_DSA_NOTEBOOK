// Climbing Stairs Problem
// Question: You are climbing a staircase. It takes 'n' steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

#include <stdio.h>

// Function to calculate the number of ways to climb stairs using Tabulation
int climbStairs(int n) {
    if (n <= 1) return 1; // Base cases: 0 or 1 step

    int dp[n + 1]; // Array to store the number of ways for each step

    // Base cases
    dp[0] = 1; // 1 way to stay at step 0
    dp[1] = 1; // 1 way to reach step 1

    // Fill the dp array iteratively
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // Ways from the previous step + two steps back
    }

    return dp[n]; // Return the result for n steps
}

int main() {
    int n;

    printf("Enter the number of steps: ");
    scanf("%d", &n);

    // Calculate and display the result
    int result = climbStairs(n);
    printf("Number of ways to climb %d steps: %d\n", n, result);

    return 0;
}
