// Problem: Find the kth largest or smallest element in an array
#include <stdio.h>
#include <stdlib.h>

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
    }
    int temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;
    return i;
}

int kthSmallest(int arr[], int low, int high, int k) {
    if (low <= high) {
        int pos = partition(arr, low, high);
        if (pos == k - 1)
            return arr[pos];
        if (pos > k - 1)
            return kthSmallest(arr, low, pos - 1, k);
        return kthSmallest(arr, pos + 1, high, k);
    }
    return -1;
}

int main() {
    int arr[] = {12, 3, 5, 7, 19};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 2;
    printf("The %dth smallest element is %d\n", k, kthSmallest(arr, 0, n - 1, k));
    return 0;
}
