int* runningSum(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(numsSize * sizeof(int));
    *returnSize = numsSize;  

    int cumulativeSum = 0;

    for (int i = 0; i < numsSize; i++) {
        cumulativeSum += nums[i]; 
        result[i] = cumulativeSum;
    }

    return result;  
}
