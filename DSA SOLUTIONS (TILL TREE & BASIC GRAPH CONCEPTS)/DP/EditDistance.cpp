/**
 * @file edit_distance.cpp
 * @brief Calculates the minimum number of operations to convert one string to another
 * 
 * Problem: Given two strings word1 and word2, return the minimum number of 
 * operations required to convert word1 to word2.
 * 
 * Allowed operations:
 * - Insert a character
 * - Delete a character
 * - Replace a character
 * 
 * Time Complexity: O(m*n), where m and n are lengths of word1 and word2
 * Space Complexity: O(m*n)
 * 
 * Dynamic Programming Approach:
 * 1. Create a 2D DP table to store minimum edit distances
 * 2. Initialize base cases for empty string transformations
 * 3. Fill the table by comparing characters and choosing minimum operations
 */

#include <bits/stdc++.h>
using namespace std;

// Function to calculate minimum edit distance between two strings
int minDistance(string word1, string word2) {
    int a = word1.length(); 
    int b = word2.length(); 
    
    // DP table to store edit distances
    vector<vector<int>> dp(a + 1, vector<int>(b + 1, 0));
    
    // Base case: transforming empty string
    for (int i = 0; i <= a; i++) {
        dp[i][0] = i;  // Delete i characters
    }
    
    for (int j = 0; j <= b; j++) {
        dp[0][j] = j;  // Insert j characters
    }
    
    // Fill DP table
    for (int i = 1; i <= a; i++) {
        for (int j = 1; j <= b; j++) {
            // If characters match, no operation needed
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } 
            else {
                // Choose minimum of three operations:
                // 1. Insert (dp[i][j-1])
                // 2. Delete (dp[i-1][j])
                // 3. Replace (dp[i-1][j-1])
                int insOp = dp[i][j-1];     // Insert
                int delOp = dp[i-1][j];     // Delete
                int repOp = dp[i-1][j-1];   // Replace
                
                // Add 1 to the minimum operation cost
                dp[i][j] = 1 + min({insOp, delOp, repOp});
            }
        }
    }
    
    // Return minimum edit distance
    return dp[a][b];
}

// Example usage and test cases
int main() {
    // Test Case 1: Different strings
    cout << "Edit distance between 'horse' and 'ros': " 
         << minDistance("horse", "ros") << endl;  // Expected output: 3
    
    // Test Case 2: Same strings
    cout << "Edit distance between 'hello' and 'hello': " 
         << minDistance("hello", "hello") << endl;  // Expected output: 0
    
    // Test Case 3: Empty strings
    cout << "Edit distance between '' and 'abc': " 
         << minDistance("", "abc") << endl;  // Expected output: 3
    
    return 0;
}

/* 
 * Approach Explanation:
 * - Uses Dynamic Programming to solve the problem efficiently
 * - DP table stores minimum operations to transform prefixes
 * - Each cell represents min operations to convert word1[0:i] to word2[0:j]
 * 
 * Example walkthrough for "horse" to "ros":
 * 1. Replace 'h' with 'r' (1 operation)
 * 2. Replace 'r' with 'o' (1 operation)
 * 3. Delete 's' and 'e' (2 operations)
 * Total: 3 operations
 */