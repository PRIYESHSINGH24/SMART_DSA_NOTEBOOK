// Fibonacci Series using Dynamic Programming
// Includes both Memoization and Tabulation approaches

#include <stdio.h>
#include <string.h> // For memset function

// --- MEMOIZATION APPROACH ---
// Top-down approach: Solves the problem recursively and stores the results to avoid redundant calculations.
// Avoids redundant computation by storing already solved subproblems in a table.
int fibMemoization(int n, int dp[]) {
    // Base cases
    if (n <= 1) return n;

    // If the value is already computed, return it
    if (dp[n] != -1) return dp[n];

    // Compute and store the value
    dp[n] = fibMemoization(n - 1, dp) + fibMemoization(n - 2, dp);
    return dp[n];
}

// --- TABULATION APPROACH ---
// Bottom-up approach: Builds the solution iteratively using a table.
// Starts from base cases and iteratively builds up the solution.
int fibTabulation(int n) {
    // Base case
    if (n <= 1) return n;

    // Create an array to store Fibonacci numbers
    int dp[n + 1];

    // Initialize base cases
    dp[0] = 0;
    dp[1] = 1;

    // Fill the table iteratively
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Return the nth Fibonacci number
    return dp[n];
}

int main() {
    int n;
    printf("Enter the value of n: ");
    scanf("%d", &n);

    // --- MEMOIZATION ---
    // Initialize the dp array with -1
    int dp[n + 1];
    memset(dp, -1, sizeof(dp));

    // Calculate Fibonacci using Memoization
    int resultMemoization = fibMemoization(n, dp);
    printf("Fibonacci number (Memoization) at position %d is: %d\n", n, resultMemoization);

    // --- TABULATION ---
    // Calculate Fibonacci using Tabulation
    int resultTabulation = fibTabulation(n);
    printf("Fibonacci number (Tabulation) at position %d is: %d\n", n, resultTabulation);

    return 0;
}




/* Key Difference Between Memoization and Tabulation

Aspect	             Memoization	                                            Tabulation
Approach	Top-down (starts from the main problem).	            Bottom-up (starts from the base cases).
Recursion	Requires recursion.	                                    Iterative, no recursion.
Storage	    Stores results during recursion calls.	                Builds a complete table iteratively.*/
