# <div align="Center">3 Sum Problem</div>
## The 3Sum problem is a popular problem where you are given an array of integers and need to find all unique triplets in the array that sum up to a specific target (usually zero). It’s a variation of the subset sum problem and is commonly used to practice array manipulation and sorting.
<hr>

### For Example :
```
#include <stdio.h>
#include <stdlib.h>

void threeSum(int arr[], int n) {
    // Sorting the array
    qsort(arr, n, sizeof(int), compare);

    // Iterate through the array
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue; // Skip duplicates

        int left = i + 1;
        int right = n - 1;
        int target = -arr[i];

        while (left < right) {
            if (arr[left] + arr[right] == target) {
                printf("%d, %d, %d\n", arr[i], arr[left], arr[right]);
                while (left < right && arr[left] == arr[left + 1]) left++; // Skip duplicates
                while (left < right && arr[right] == arr[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (arr[left] + arr[right] < target) {
                left++;
            } else {
                right--;
            }
        }
    }
}

// Comparison function for qsort
int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int arr[] = {-1, 0, 1, 2, -1, -4};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Triplets that sum to zero:\n");
    threeSum(arr, n);

    return 0;
}
```
