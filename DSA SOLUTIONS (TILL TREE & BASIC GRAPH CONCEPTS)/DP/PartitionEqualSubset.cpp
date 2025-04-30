/**
 * @brief Partition Equal Subset Sum Problem
 * 
 * Problem: Determine if an array can be partitioned into two subsets 
 * with equal sum
 * 
 * Key Approach:
 * - Top-down Dynamic Programming with Memoization
 * - Recursively explore subset sum possibilities
 * - Time Complexity: O(n*sum)
 * - Space Complexity: O(n*sum)
 */

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    // Recursive helper function with memoization
    bool f(vector<int> &arr, int i, int sum, vector<vector<int>> &dp) {
        // Base case: reached first element
        if (i == 0) {
            return arr[i] == sum;
        }
        
        // Return memoized result if already computed
        if (dp[i][sum] != -1) {
            return dp[i][sum];
        }
        
        // If target sum is zero, subset found
        if (sum == 0) {
            return true;
        }
        
        // Invalid sum
        if (sum < 0) {
            return false;
        }
        
        bool a = false;
        // Option 1: Include current element if possible
        if (arr[i] <= sum) {
            a = f(arr, i-1, sum-arr[i], dp);
        }
        
        // Option 2: Exclude current element
        bool b = f(arr, i-1, sum, dp);
        
        // Memoize and return result
        return dp[i][sum] = a || b;
    }
    
    // Main function to check partition possibility
    bool canPartition(vector<int>& nums) {
        // Calculate total sum
        int sum = 0;
        for (int x : nums) {
            sum += x;
        }
        
        // If total sum is odd, cannot be partitioned equally
        if (sum % 2 != 0) {
            return false;
        }
        
        // Target sum is half of total
        sum = sum / 2;
        
        // Create memoization table
        int n = nums.size();
        vector<vector<int>> dp(n, vector<int>(sum+1, -1));
        
        // Call recursive helper
        return f(nums, n-1, sum, dp);
    }
};

// Test cases to demonstrate solution
int main() {
    Solution sol;
    
    // Test Case 1: Partitionable array
    vector<int> nums1 = {1, 5, 11, 5};
    cout << "Can Partition 1: " << (sol.canPartition(nums1) ? "True" : "False") << endl;
    
    // Test Case 2: Non-partitionable array
    vector<int> nums2 = {1, 2, 3, 5};
    cout << "Can Partition 2: " << (sol.canPartition(nums2) ? "True" : "False") << endl;
    
    // Test Case 3: Single element array
    vector<int> nums3 = {1};
    cout << "Can Partition 3: " << (sol.canPartition(nums3) ? "True" : "False") << endl;
    
    return 0;
}

/* 
 * Algorithm Walkthrough:
 * 1. Check if total sum is even (prerequisite for equal partition)
 * 2. Recursively explore subset sum with memoization
 * 3. Two choices at each step:
 *    a) Include current element if possible
 *    b) Exclude current element
 * 4. Find if a subset with target sum exists
 */