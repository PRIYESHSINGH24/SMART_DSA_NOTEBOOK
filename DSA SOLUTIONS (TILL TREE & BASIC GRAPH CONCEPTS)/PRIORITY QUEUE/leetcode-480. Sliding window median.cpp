/*The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

For examples, if arr = [2,3,4], the median is 3.
For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation: 
Window position                Median
---------------                -----
[1  3  -1] -3  5  3  6  7        1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7        3
 1  3  -1  -3 [5  3  6] 7        5
 1  3  -1  -3  5 [3  6  7]       6
Example 2:

Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]*/








/*
Approach:

1. **Use a Multiset for Sliding Window**:
   - A `multiset` is used to maintain the current `k` elements of the window in a sorted order.
   - This allows efficient insertion and deletion while keeping the elements sorted.

2. **Maintain a Mid Iterator**:
   - Use an iterator `mid` to point to the middle element of the current window.
   - Depending on the size of the window (`k`), the median is computed as:
     - If `k` is odd: The element at `mid`.
     - If `k` is even: The average of the element at `mid` and the one before it.

3. **Sliding Window Logic**:
   - Initialize the `multiset` with the first `k` elements and set the `mid` iterator.
   - For each new element in the array, perform the following:
     - Add the new element to the `multiset`.
     - Adjust the `mid` iterator if the new element affects its position.
     - Remove the element that slides out of the window.
     - Adjust the `mid` iterator again if the removed element affects its position.

4. **Compute Median**:
   - Push the median of the current window into the result vector.
   - Continue sliding the window until the end of the array.

5. **Return the Result**:
   - Once all windows are processed, return the result vector containing the medians.

Time Complexity:
   - Insertion and deletion in a `multiset` take O(log k).
   - For `n` elements, the total time complexity is O(n log k).

Space Complexity:
   - The `multiset` stores `k` elements, so the space complexity is O(k).
*/

vector<double> medianSlidingWindow(vector<int>& nums, int k) {
    // Initialize a multiset with the first k elements.
    multiset<int> window(nums.begin(), nums.begin() + k);
    
    // Iterator to point to the middle element of the multiset.
    auto mid = next(window.begin(), k / 2);
    
    // Result vector to store medians.
    vector<double> medians;
    
    for (int i = k; ; i++) {
        // Push the current median to the result vector.
        medians.push_back((double(*mid) + *prev(mid, 1 - k % 2)) / 2);

        // If all windows are processed, return the result vector.
        if (i == nums.size())
            return medians;

        // Insert the next element in the window.
        window.insert(nums[i]);
        if (nums[i] < *mid)
            mid--;

        // Remove the element that slides out of the window.
        if (nums[i - k] <= *mid)
            mid++;
        window.erase(window.lower_bound(nums[i - k]));
    }
}
