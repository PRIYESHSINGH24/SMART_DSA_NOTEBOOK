def find_minimum(nums):
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        
        # Compare mid with the rightmost element to determine the search space
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    
    return nums[left]

# Example Usage
nums = [3, 4, 5, 1, 2]
result = find_minimum(nums)
print(result)  # Output: 1
