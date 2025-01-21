// Problem: Partition an array into two subsets with minimal difference in sums
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int findMinDifference(int arr[], int n, int sumCalculated, int sumTotal) {
    if (n == 0)
        return abs((sumTotal - sumCalculated) - sumCalculated);

    return min(
        findMinDifference(arr, n - 1, sumCalculated + arr[n - 1], sumTotal),
        findMinDifference(arr, n - 1, sumCalculated, sumTotal)
    );
}

int partitionMinDifference(int arr[], int n) {
    int sumTotal = 0;
    for (int i = 0; i < n; i++) {
        sumTotal += arr[i];
    }
    return findMinDifference(arr, n, 0, sumTotal);
}

int main() {
    int arr[] = {1, 6, 11, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("Minimum Difference: %d\n", partitionMinDifference(arr, n));
    return 0;
}
