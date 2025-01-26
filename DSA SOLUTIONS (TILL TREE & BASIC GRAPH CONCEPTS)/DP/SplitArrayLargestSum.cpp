/**
 * @brief Split Array Largest Sum Problem
 * 
 * Problem: Minimize the largest sum among k subarrays
 * 
 * Time Complexity: O(n^2 * k)
 * Space Complexity: O(n * k)
 * 
 * Constraints:
 * - 1 <= nums.length <= 1000
 * - 0 <= nums[i] <= 10^6
 * - 1 <= k <= min(50, nums.length)
 */

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    // Memoization array
    int dp[1003][53]; 
    
    // Recursive function with memoization
    int f(int i, int j, vector<int>& v) {
        // Out of bounds checks
        // Time: O(1), Space: O(1)
        if(j < 0) {
            if(i < 0) return -1; 
            return INT_MAX; 
        }
        
        if(i < 0) return INT_MAX;
        
        // Memoization check
        // Time: O(1), Space: O(1)
        if(dp[i][j] != -1) return dp[i][j];
        
        // Initialize result and sum variables
        // Time: O(1), Space: O(1)
        int res = INT_MAX, sum = 0;
        
        // Explore all possible last subarrays
        // Time: O(n), Where n is the length of subarrays
        for(int k = i; k >= 0; k--) {
            sum += v[k];  // Accumulate sum
            
            // Minimize the maximum subarray sum
            // Recursively solve for remaining subarrays
            res = min(res, max(sum, f(k - 1, j - 1, v)));
        }
        
        // Memoize and return result
        // Time: O(1), Space: O(1)
        return dp[i][j] = res;
    }
    
    // Main function to split array
    int splitArray(vector<int>& nums, int k) {
        // Initialize memoization table
        // Time: O(n*k), Space: O(n*k)
        memset(dp, -1, sizeof(dp));
        
        // Call recursive function
        // Time: O(n^2 * k)
        return f(nums.size() - 1, k - 1, nums);
    }
};

// Test cases to demonstrate solution
int main() {
    Solution sol;
    
    // Test Case 1: Basic scenario
    vector<int> nums1 = {7,2,5,10,8};
    int k1 = 2;
    cout << "Largest Sum (Test 1): " 
         << sol.splitArray(nums1, k1) << endl;  // Expected: 18
    
    // Test Case 2: More complex scenario
    vector<int> nums2 = {1,2,3,4,5};
    int k2 = 2;
    cout << "Largest Sum (Test 2): " 
         << sol.splitArray(nums2, k2) << endl;  // Expected: 9
    
    return 0;
}

/* 
 * Algorithm Explanation:
 * 1. Use dynamic programming with memoization
 * 2. Recursively find minimum of maximum subarray sums
 * 3. Try all possible last subarray configurations
 * 4. Minimize the largest subarray sum
 */