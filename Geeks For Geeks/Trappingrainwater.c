//Problem Statement: Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

#include <stdio.h>

// Function to find the amount of trapped rain water
int trap(int* height, int heightSize) {
    if (heightSize == 0) return 0;
    int left = 0, right = heightSize - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}

int main() {
    int height[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    int heightSize = sizeof(height) / sizeof(height[0]);
    int water = trap(height, heightSize);
    printf("Trapped Rain Water: %d\n", water);
    return 0;
}
