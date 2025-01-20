public class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        boolean one = false;
        
        // Step 1: Check if 1 is present and clean the array
        for(int i = 0; i < n; i++) {
            if(nums[i] == 1) {
                one = true;
            }
            if(nums[i] <= 0 || nums[i] > n) {
                nums[i] = 1;
            }
        }
        
        if(!one) return 1;
        
        // Step 2: Mark elements as negative based on their presence
        for(int i = 0; i < n; i++) {
            int idx = Math.abs(nums[i]);
            if(nums[idx - 1] > 0) {
                nums[idx - 1] = -nums[idx - 1];
            }
        }
        
        // Step 3: Find the first missing positive
        for(int i = 0; i < n; i++) {
            if(nums[i] > 0) {
                return i + 1;
            }
        }
        
        return n + 1;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test case 1
        int[] nums1 = {1, 2, 0};
        System.out.println("First Missing Positive for nums1: " + solution.firstMissingPositive(nums1)); // Output should be 3
        
        // Test case 2
        int[] nums2 = {3, 4, -1, 1};
        System.out.println("First Missing Positive for nums2: " + solution.firstMissingPositive(nums2)); // Output should be 2
        
        // Test case 3
        int[] nums3 = {7, 8, 9, 11, 12};
        System.out.println("First Missing Positive for nums3: " + solution.firstMissingPositive(nums3)); // Output should be 1
    }
}
