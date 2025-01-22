/*
3Sum Problem (Finding all unique triplets that sum up to zero)
Problem Statement: Given an array nums, find all unique triplets in it that give the sum of zero.
*/

public class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;  // Skip duplicate values for the first element

            int left = i + 1;
            int right = nums.length - 1;
            int target = -nums[i];

            while (left < right) {
                int sum = nums[left] + nums[right];

                if (sum == target) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    left++;
                    right--;

                    // Skip duplicates for the second and third elements
                    while (left < right && nums[left] == nums[left - 1]) left++;
                    while (left < right && nums[right] == nums[right + 1]) right--;

                } else if (sum < target) {
                    left++;  // Need a larger sum, move left pointer to the right
                } else {
                    right--;  // Need a smaller sum, move right pointer to the left
                }
            }
        }

        return result;
    }
}


/*
Explanation:
Sorting: The first step is sorting the array, which makes it easier to apply the two pointers technique.
Outer loop (i): Iterates through each element in the array, and the goal is to fix one number (nums[i]), while using two pointers (left and right) to explore possible triplets that sum up to -nums[i].
Two Pointers: The left pointer starts just to the right of i, and the right pointer starts at the end of the array. The sum of nums[left] + nums[right] is compared to -nums[i], and based on the comparison, pointers are adjusted.
Avoid Duplicates: To ensure only unique triplets are found, we skip over duplicates for both the second (left) and third (right) elements.
Result: A list of lists is returned containing all unique triplets that sum to zero.

Complexity Analysis:
Time Complexity: O(n^2), where n is the length of the array. Sorting takes O(n log n), and for each iteration through i, the two pointers traverse the array, resulting in O(n).
Space Complexity: O(1), because the extra space used is constant in terms of the input size.

*/