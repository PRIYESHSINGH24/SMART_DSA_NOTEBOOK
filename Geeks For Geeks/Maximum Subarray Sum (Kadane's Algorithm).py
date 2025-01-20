def max_subarray_sum(arr):
    n = len(arr)
    
    # Initialize variables to track:
    # max_sum: the maximum subarray sum found so far
    # current_sum: the sum of the current subarray being considered
    max_sum = float('-inf')  # Smallest possible value initially
    current_sum = 0

    # To track the indices of the maximum subarray
    start = 0
    end = 0
    temp_start = 0

    for i in range(n):
        # Add the current element to the current subarray sum
        current_sum += arr[i]

        # Update max_sum if the current subarray sum is greater
        if current_sum > max_sum:
            max_sum = current_sum
            start = temp_start  # Update start to the temp start index
            end = i  # Update end to the current index

        # If the current subarray sum drops below zero, reset it
        # Start a new subarray from the next index
        if current_sum < 0:
            current_sum = 0
            temp_start = i + 1  # Update temp start to the next index

    # Print the indices and the maximum sum
    print("Maximum Subarray Sum:", max_sum)
    print("Subarray Indices: Start =", start, "End =", end)
    print("Subarray Elements:", arr[start:end + 1])

    return max_sum


# Input: Length of the array and the array elements
n = int(input("Enter the number of elements: "))
arr = list(map(int, input("Enter the elements separated by space: ").split()))

# Call the function and output the result
max_subarray_sum(arr)
