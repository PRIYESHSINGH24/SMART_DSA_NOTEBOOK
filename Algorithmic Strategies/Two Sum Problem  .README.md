# <div align="Center">Two Sum Problem</div>
## The Two Sum problem asks to find two numbers in an array that add up to a specific target. It’s a foundational problem for practicing hash maps, arrays, and basic algorithm optimization.
<hr>

### For Example :
```
#include <stdio.h>
#include <stdlib.h>

// Function to find two numbers that sum to the target
int* twoSum(int arr[], int n, int target) {
    static int result[2];
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    return NULL;  // Return NULL if no solution found
}

int main() {
    int arr[] = {2, 7, 11, 15};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 9;

    int* indices = twoSum(arr, n, target);
    if (indices != NULL) {
        printf("Indices of numbers that sum to %d: (%d, %d)\n", target, indices[0], indices[1]);
    } else {
        printf("No two numbers sum to %d\n", target);
    }

    return 0;
}
```
