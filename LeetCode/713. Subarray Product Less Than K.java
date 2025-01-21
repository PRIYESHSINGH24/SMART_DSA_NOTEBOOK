class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        int product = 1;
        int count = 0;
        int left = 0, right = 0;
        while(right < nums.length){
            product *= nums[right];
            while(product >= k && left <= right){
                product /= nums[left++];
            }
            if(product < k){
                count += right - left + 1;
            }
            right++;
        }
        return count;
    }
}