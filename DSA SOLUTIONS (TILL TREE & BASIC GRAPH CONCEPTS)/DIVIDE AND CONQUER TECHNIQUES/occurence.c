// Problem: Find the number of times an element occurs in a sorted array
#include <stdio.h>

int binarySearchFirst(int arr[], int n, int target) {
    int low = 0, high = n - 1, result = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            result = mid;
            high = mid - 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

int binarySearchLast(int arr[], int n, int target) {
    int low = 0, high = n - 1, result = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            result = mid;
            low = mid + 1;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

int countOccurrences(int arr[], int n, int target) {
    int first = binarySearchFirst(arr, n, target);
    if (first == -1) {
        return 0; // Element not found
    }
    int last = binarySearchLast(arr, n, target);
    return last - first + 1;
}

int main() {
    int arr[] = {1, 2, 2, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 2;
    printf("Number of occurrences of %d is %d\n", target, countOccurrences(arr, n, target));
    return 0;
}
