// Problem: Search for an element in an array that has been rotated
#include <stdio.h>

int searchInRotatedArray(int arr[], int low, int high, int target) {
    if (low > high)
        return -1;

    int mid = low + (high - low) / 2;

    if (arr[mid] == target)
        return mid;

    if (arr[low] <= arr[mid]) {
        // Left half is sorted
        if (target >= arr[low] && target < arr[mid]) {
            return searchInRotatedArray(arr, low, mid - 1, target);
        }
        return searchInRotatedArray(arr, mid + 1, high, target);
    }

    // Right half is sorted
    if (target > arr[mid] && target <= arr[high]) {
        return searchInRotatedArray(arr, mid + 1, high, target);
    }
    return searchInRotatedArray(arr, low, mid - 1, target);
}

int main() {
    int arr[] = {4, 5, 6, 7, 0, 1, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 0;

    int index = searchInRotatedArray(arr, 0, n - 1, target);
    if (index != -1) {
        printf("Element %d found at index %d\n", target, index);
    } else {
        printf("Element %d not found\n", target);
    }

    return 0;
}
