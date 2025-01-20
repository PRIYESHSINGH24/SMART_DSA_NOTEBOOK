int* shuffle(int* nums, int n, int* returnSize) {
    int* result = (int*)malloc(2 * n * sizeof(int));
    *returnSize = 2 * n; 

    for (int i = 0; i < n; i++) {
        result[2 * i] = nums[i];        
        result[2 * i + 1] = nums[i + n]; 
    }

    return result; 
}
