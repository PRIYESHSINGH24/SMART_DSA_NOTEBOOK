
def quick_sort(arr):
    """
    Main function to perform Quick Sort.
    This function calls the helper function to sort the array using the divide-and-conquer strategy.
    """
    print(f"Initial Array: {arr}")
    sorted_array = quick_sort_recursive(arr, 0, len(arr) - 1)
    print(f"Sorted Array: {sorted_array}")
    return sorted_array

def quick_sort_recursive(arr, low, high):
    """
    Recursive helper function for Quick Sort.
    It partitions the array into subarrays and sorts them recursively.
    """
    if low < high:
        # Partition the array and get the pivot index
        pivot_index = partition(arr, low, high)
        print(f"Array after partitioning: {arr}, Pivot Index: {pivot_index}")

        # Recursively sort elements before and after partition
        quick_sort_recursive(arr, low, pivot_index - 1)
        quick_sort_recursive(arr, pivot_index + 1, high)

    return arr

def partition(arr, low, high):
    """
    Partition the array around a pivot element.
    Elements smaller than the pivot are moved to the left, and elements greater are moved to the right.
    """
    pivot = arr[high]  # Choose the last element as pivot
    print(f"Using Pivot: {pivot} (from index {high})")
    i = low - 1  # Pointer for the smaller element

    # Traverse through the array and compare each element with the pivot
    for j in range(low, high):
        print(f"Comparing: {arr[j]} with Pivot: {pivot}")
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]  # Swap
            print(f"Swapped: {arr[i]} and {arr[j]}, Updated Array: {arr}")
    
    # Place the pivot element in the correct position
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    print(f"Placing Pivot: {pivot} at correct position, Updated Array: {arr}")
    return i + 1

# Example Usage
array = [10, 7, 8, 9, 1, 5]
print("Quick Sort Example")
quick_sort(array)  
