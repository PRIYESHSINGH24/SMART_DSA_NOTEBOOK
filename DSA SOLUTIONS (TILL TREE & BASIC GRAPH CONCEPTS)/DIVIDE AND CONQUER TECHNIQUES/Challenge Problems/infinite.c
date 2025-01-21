// Problem: Search for an element in an infinite sorted array
#include <stdio.h>

int binarySearch(int arr[], int low, int high, int target) {
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

int findInInfiniteArray(int arr[], int target) {
    int low = 0, high = 1;
    while (arr[high] < target) {
        low = high;
        high *= 2;
    }
    return binarySearch(arr, low, high, target);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35};
    int target = 15;

    int index = findInInfiniteArray(arr, target);
    if (index != -1) {
        printf("Element found at index %d\n", index);
    } else {
        printf("Element not found\n");
    }
    return 0;
}
