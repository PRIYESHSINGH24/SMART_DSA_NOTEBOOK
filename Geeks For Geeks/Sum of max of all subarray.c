#include <stdio.h>
#include <stdlib.h>

// Function to calculate the sum of maximum values of all subarrays
long long sumOfMaxRight(int arr[], int n) {
    long long result = 0;
    int *nextGreater = (int *)malloc(n * sizeof(int)); // Next Greater Element
    int *prevGreater = (int *)malloc(n * sizeof(int)); // Previous Greater Element
    int *stack = (int *)malloc(n * sizeof(int)); // Stack for indices
    int top;

    // Calculate next greater element for each element
    nextGreater[n - 1] = n;
    stack[0] = n - 1;
    top = 0;
    for (int i = n - 2; i >= 0; i--) {
        while (top >= 0 && arr[stack[top]] <= arr[i]) {
            top--;
        }
        if (top >= 0) {
            nextGreater[i] = stack[top];
        } else {
            nextGreater[i] = n;
        }
        stack[++top] = i;
    }

    // Calculate previous greater element for each element
    prevGreater[0] = -1;
    stack[0] = 0;
    top = 0;
    for (int i = 1; i < n; i++) {
        while (top >= 0 && arr[stack[top]] < arr[i]) {
            top--;
        }
        if (top >= 0) {
            prevGreater[i] = stack[top];
        } else {
            prevGreater[i] = -1;
        }
        stack[++top] = i;
    }

    // Calculate the sum of maximum values of all subarrays
    for (int i = 0; i < n; i++) {
        result += (long long)arr[i] * (i - prevGreater[i]) * (nextGreater[i] - i);
    }

    free(nextGreater);
    free(prevGreater);
    free(stack);

    return result;
}

int main() {
    int arr[] = {3, 1, 2, 4}; // Example array
    int n = sizeof(arr) / sizeof(arr[0]);

    long long result = sumOfMaxRight(arr, n);
    printf("Sum of maximums of all subarrays: %lld\n", result);

    return 0;
}

