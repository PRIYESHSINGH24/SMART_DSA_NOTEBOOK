// Problem: Find the majority element in an array using divide and conquer
#include <stdio.h>

int findCandidate(int arr[], int low, int high) {
    if (low == high)
        return arr[low];

    int mid = low + (high - low) / 2;
    int left = findCandidate(arr, low, mid);
    int right = findCandidate(arr, mid + 1, high);

    if (left == right)
        return left;

    int leftCount = 0, rightCount = 0;
    for (int i = low; i <= high; i++) {
        if (arr[i] == left)
            leftCount++;
        else if (arr[i] == right)
            rightCount++;
    }

    return (leftCount > rightCount) ? left : right;
}

int isMajority(int arr[], int n, int candidate) {
    int count = 0;
    for (int i = 0; i < n; i++)
        if (arr[i] == candidate)
            count++;
    return count > n / 2;
}

int majorityElement(int arr[], int n) {
    int candidate = findCandidate(arr, 0, n - 1);
    return isMajority(arr, n, candidate) ? candidate : -1;
}

int main() {
    int arr[] = {2, 2, 2, 1, 1, 2, 2};
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = majorityElement(arr, n);
    if (result != -1)
        printf("The majority element is %d\n", result);
    else
        printf("No majority element found\n");
    return 0;
}
