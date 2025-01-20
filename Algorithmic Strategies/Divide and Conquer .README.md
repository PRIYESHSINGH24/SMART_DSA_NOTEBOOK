# <div align="Center">Divide and Conquer</div>
## Divide and Conquer is a problem-solving technique that breaks down a large problem into smaller, more manageable subproblems. These subproblems are solved independently and then combined to find the solution to the original problem. This approach helps in reducing complexity and improving efficiency in many algorithms. It is often used in algorithms related to sorting, searching, and multiplication.

### Example: Merge Sort
### 1. Divide the array into two halves.
### 2. Recursively sort each half.
### 3. Merge the two sorted halves to form a sorted array.
###     In this case, the problem of sorting an array is divided into smaller subproblems, each of which is easier to solve.
<hr>

### For Example :
```
#include <stdio.h>

// Function to merge two halves into a sorted array
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temporary arrays
    int leftArr[n1], rightArr[n2];

    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        leftArr[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        rightArr[j] = arr[mid + 1 + j];

    // Merge the temp arrays back into the original array
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements of leftArr[], if any
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    // Copy remaining elements of rightArr[], if any
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

// Function to implement Merge Sort
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;  // Find the middle point

        // Recursively sort the first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}

// Function to print the array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

// Main function
int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int size = sizeof(arr) / sizeof(arr[0]);

    printf("Original Array: \n");
    printArray(arr, size);

    // Call mergeSort to sort the array
    mergeSort(arr, 0, size - 1);

    printf("Sorted Array: \n");
    printArray(arr, size);

    return 0;
}

```

### Output:
```
Original Array: 
38 27 43 3 9 82 10 
Sorted Array: 
3 9 10 27 38 43 82 

```
