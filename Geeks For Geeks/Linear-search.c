#include <stdio.h>

void linearSearch(int arr[], int n, int key) {
    int found = 0;  // To track if the element is found
    int indices[100];  // Array to store indices where key is found
    int count = 0;  // To count how many times the key occurs

    // Perform the search
    for(int i = 0; i < n; i++) {
        if(arr[i] == key) {
            indices[count] = i;  // Store the index of the key found
            count++;              // Increment the occurrence counter
            found = 1;            // Set found flag
        }
    }

    if(found) {
        printf("Element %d found at indices: ", key);
        for(int i = 0; i < count; i++) {
            printf("%d ", indices[i]);
        }
        printf("\n");
        printf("Total occurrences: %d\n", count);
    } else {
        printf("Element %d not found in the array.\n", key);
    }
}

int main() {
    int n;

    // Accept array size from the user
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];

    // Accept array elements from the user
    printf("Enter the elements of the array:\n");
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int key;
    // Accept the search key from the user
    printf("Enter the element to search for: ");
    scanf("%d", &key);

    // Call linearSearch to find the element
    linearSearch(arr, n, key);

    return 0;
}
