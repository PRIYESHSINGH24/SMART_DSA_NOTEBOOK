class Solution:
    def getAllSubsets(self, nums, ans, i, allSubsets):
        if i == len(nums):
            allSubsets.append(ans[:])
            return
        
        # Include
        ans.append(nums[i])
        self.getAllSubsets(nums, ans, i + 1, allSubsets)
        ans.pop()
        
        idx = i + 1
        while idx < len(nums) and nums[idx] == nums[idx - 1]:
            idx += 1
            
        # Exclude
        self.getAllSubsets(nums, ans, idx, allSubsets)

    def subsetsWithDup(self, nums):
        nums.sort()
        allSubsets = []
        self.getAllSubsets(nums, [], 0, allSubsets)
        return allSubsets

# Example usage
solution = Solution()
nums = [1, 2, 2]
print(solution.subsetsWithDup(nums))
