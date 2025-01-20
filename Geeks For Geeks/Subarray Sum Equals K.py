

def subarray_sum(nums, k):
    count = 0
    current_sum = 0
    prefix_sum = {0: 1}  # Initialize with 0 to handle cases where subarray starts at index 0
    
    for num in nums:
        current_sum += num
        
        # Check if (current_sum - k) exists in the hashmap
        if current_sum - k in prefix_sum:
            count += prefix_sum[current_sum - k]
        
        # Update the prefix_sum hashmap
        prefix_sum[current_sum] = prefix_sum.get(current_sum, 0) + 1
    
    return count

# Example Usage
nums = [1, 1, 1]
k = 2
result = subarray_sum(nums, k)
print(result)  # Output: 2
