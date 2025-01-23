#include <stdio.h>
#include <stdlib.h>

// Function to compare two integers for qsort
int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

void getAllSubsets(int* nums, int numsSize, int* ans, int ansSize, int i, int** allSubsets, int* returnSize, int* returnColumnSizes) {
    if (i == numsSize) {
        allSubsets[*returnSize] = (int*)malloc(ansSize * sizeof(int));
        for (int j = 0; j < ansSize; j++) {
            allSubsets[*returnSize][j] = ans[j];
        }
        returnColumnSizes[*returnSize] = ansSize;
        (*returnSize)++;
        return;
    }
    
    // Include the current element
    ans[ansSize] = nums[i];
    getAllSubsets(nums, numsSize, ans, ansSize + 1, i + 1, allSubsets, returnSize, returnColumnSizes);
    
    // Exclude the current element
    while (i + 1 < numsSize && nums[i] == nums[i + 1]) i++;
    getAllSubsets(nums, numsSize, ans, ansSize, i + 1, allSubsets, returnSize, returnColumnSizes);
}

int** subsetsWithDup(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    int maxSubsetSize = 1 << numsSize;
    int** allSubsets = (int**)malloc(maxSubsetSize * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxSubsetSize * sizeof(int));
    int* ans = (int*)malloc(numsSize * sizeof(int));
    *returnSize = 0;
    
    qsort(nums, numsSize, sizeof(int), compare); // sort nums
    
    getAllSubsets(nums, numsSize, ans, 0, 0, allSubsets, returnSize, *returnColumnSizes);

    free(ans);
    return allSubsets;
}

int main() {
    int nums[] = {1, 2, 2};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    int returnSize;
    int* returnColumnSizes;

    int** result = subsetsWithDup(nums, numsSize, &returnSize, &returnColumnSizes);

    for (int i = 0; i < returnSize; i++) {
        printf("[");
        for (int j = 0; j < returnColumnSizes[i]; j++) {
            printf("%d", result[i][j]);
            if (j < returnColumnSizes[i] - 1) printf(", ");
        }
        printf("]\n");
        free(result[i]);
    }

    free(result);
    free(returnColumnSizes);

    return 0;
}
