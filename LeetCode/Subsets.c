#include <stdio.h>
#include <stdlib.h>

void getAllSubsets(int* nums, int numsSize, int* ans, int ansSize, int i, int** allsubsets, int* returnSize, int* returnColumnSizes) {
    if (i == numsSize) {
        allsubsets[*returnSize] = (int*)malloc(ansSize * sizeof(int));
        for (int j = 0; j < ansSize; j++) {
            allsubsets[*returnSize][j] = ans[j];
        }
        returnColumnSizes[*returnSize] = ansSize;
        (*returnSize)++;
        return;
    }

    // Include the current element
    ans[ansSize] = nums[i];
    getAllSubsets(nums, numsSize, ans, ansSize + 1, i + 1, allsubsets, returnSize, returnColumnSizes);
    // Exclude the current element
    getAllSubsets(nums, numsSize, ans, ansSize, i + 1, allsubsets, returnSize, returnColumnSizes);
}

int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    int maxSubsetSize = 1 << numsSize;
    int** allsubsets = (int**)malloc(maxSubsetSize * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxSubsetSize * sizeof(int));
    int* ans = (int*)malloc(numsSize * sizeof(int));
    *returnSize = 0;
    
    getAllSubsets(nums, numsSize, ans, 0, 0, allsubsets, returnSize, *returnColumnSizes);

    free(ans);
    return allsubsets;
}

