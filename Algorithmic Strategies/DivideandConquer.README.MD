# Divide and Conquer

<div align="Center">Divide and Conquer Approach</div>

### The divide and conquer approach involves breaking a problem into smaller sub-problems, solving each of them recursively, and then combining the results to solve the original problem. It is useful for problems that can be split into smaller, similar sub-problems.

<hr>

### For Example:

## Merge Sort

int L[n1], R[n2];

for (i = 0; i < n1; i++) {
    L[i] = arr[left + i];
}
for (j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
}

i = 0;
j = 0;
k = left;

while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
    } else {
        arr[k] = R[j];
        j++;
    }
    k++;
}

while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
}

while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
}


## Styling 
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);


mergeSort(arr, 0, n - 1);

printf("Sorted array: \n");
for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
}
printf("\n");

return 0;


### Explanation of Merge Sort:
- **Divide**: The array is divided into two halves.
- **Conquer**: Each half is sorted recursively.
- **Combine**: The sorted halves are merged to form the sorted array.

This example clearly demonstrates the divide and conquer strategy, step by step. Let me know if you need any modifications or additions!




