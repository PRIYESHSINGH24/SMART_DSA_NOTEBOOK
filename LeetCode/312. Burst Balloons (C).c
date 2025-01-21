#include <stdio.h>
#include <string.h>

#define MAX 501

int maxCoins(int* nums, int numsSize) {
    int n = numsSize + 2;
    int newNums[MAX];
    int dp[MAX][MAX] = {0};
    
    newNums[0] = 1;
    newNums[n - 1] = 1;
    for (int i = 1; i <= numsSize; i++) {
        newNums[i] = nums[i - 1];
    }
    
    for (int len = 1; len <= numsSize; len++) {
        for (int left = 1; left <= numsSize - len + 1; left++) {
            int right = left + len - 1;
            for (int k = left; k <= right; k++) {
                dp[left][right] = 
                    fmax(dp[left][right], 
                         dp[left][k - 1] + newNums[left - 1] * newNums[k] * newNums[right + 1] + dp[k + 1][right]);
            }
        }
    }
    
    return dp[1][numsSize];
}

int main() {
    int nums[] = {3, 1, 5, 8};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    printf("Maximum coins: %d\n", maxCoins(nums, numsSize));
    return 0;
}
