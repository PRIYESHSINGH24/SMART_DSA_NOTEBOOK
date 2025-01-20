class Solution {
    public int trap(int[] height) {
        if (height == null || height.length < 3) {
            return 0;
        }

        int left = 0, right = height.length - 1;
        int leftMax = height[left], rightMax = height[right]; 
        int trappedWater = 0;

        while (left < right) {
            if (leftMax <= rightMax) {
                trappedWater += Math.max(0, leftMax - height[left]);
                left++;  
                leftMax = Math.max(leftMax, height[left]); 
            } else {
                trappedWater += Math.max(0, rightMax - height[right]);
                right--; 
                rightMax = Math.max(rightMax, height[right]);
            }
        }

        return trappedWater;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        int[] height1 = {0,1,0,2,1,0,1,3,2,1,2,1};
        System.out.println("Trapped Water for height1: " + solution.trap(height1)); // Output should be 6
        
        // Test case 2
        int[] height2 = {4,2,0,3,2,5};
        System.out.println("Trapped Water for height2: " + solution.trap(height2)); // Output should be 9

    }
}
