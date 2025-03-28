/**
 * @brief Maximum Product Subarray Problem Solution
 * 
 * Problem: Find the contiguous subarray with the largest product
 * 
 * Key Approach:
 * - Dynamic Programming with simultaneous tracking of max and min products
 * - Handles both positive and negative numbers
 * - O(n) time complexity, O(1) space complexity
 */

#include <bits/stdc++.h>
using namespace std;

int maxProduct(vector<int>& nums) {
    // Handle empty input
    if (nums.empty()) return 0;
    
    // Initialize variables to track max and min products
    int max_prod = nums[0];  // Current max product
    int min_prod = nums[0];  // Current min product (crucial for negative numbers)
    int result = nums[0];    // Overall max product
    
    // Iterate through array starting from second element
    for (int i = 1; i < nums.size(); i++) {
        // Swap max and min if current number is negative 
        // This helps handle multiplications with negative numbers
        if (nums[i] < 0) {
            std::swap(max_prod, min_prod);
        }
        
        // Update max and min products
        max_prod = std::max(nums[i], max_prod * nums[i]);
        min_prod = std::min(nums[i], min_prod * nums[i]);
        
        // Update overall result
        result = std::max(result, max_prod);
    }
    
    return result;
}

// Test cases to demonstrate solution
int main() {
    // Test Case 1: Mixed positive and negative numbers
    vector<int> nums1 = {2, 3, -2, 4};
    cout << "Max Product 1: " << maxProduct(nums1) << endl;  // Expected: 6
    
    // Test Case 2: All negative numbers
    vector<int> nums2 = {-2, -3, -4};
    cout << "Max Product 2: " << maxProduct(nums2) << endl;  // Expected: 12
    
    // Test Case 3: Single element
    vector<int> nums3 = {-2};
    cout << "Max Product 3: " << maxProduct(nums3) << endl;  // Expected: -2
    
    return 0;
}

/* 
 * Algorithm Explanation:
 * 1. Track both max and min products at each step
 * 2. Swap max/min for negative numbers to handle sign changes
 * 3. Choose between current number and product with previous elements
 * 4. Continuously update overall max product
 */