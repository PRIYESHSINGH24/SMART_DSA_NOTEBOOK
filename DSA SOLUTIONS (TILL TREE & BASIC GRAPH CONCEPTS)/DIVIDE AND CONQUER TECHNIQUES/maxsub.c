// Problem: Find the maximum sum of a contiguous subarray using Divide and Conquer
#include <stdio.h>
#include <limits.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int maxCrossingSum(int arr[], int left, int mid, int right) {
    int sum = 0;
    int left_sum = INT_MIN;
    for (int i = mid; i >= left; i--) {
        sum += arr[i];
        if (sum > left_sum)
            left_sum = sum;
    }

    sum = 0;
    int right_sum = INT_MIN;
    for (int i = mid + 1; i <= right; i++) {
        sum += arr[i];
        if (sum > right_sum)
            right_sum = sum;
    }

    return max(left_sum + right_sum, max(left_sum, right_sum));
}

int maxSubArraySum(int arr[], int left, int right) {
    if (left == right)
        return arr[left];

    int mid = (left + right) / 2;

    return max(
        maxSubArraySum(arr, left, mid),
        max(maxSubArraySum(arr, mid + 1, right),
            maxCrossingSum(arr, left, mid, right))
    );
}

int main() {
    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Maximum Subarray Sum is %d\n", maxSubArraySum(arr, 0, n - 1));
    return 0;
}
