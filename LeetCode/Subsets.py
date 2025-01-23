class Solution:
    def getAllSubsets(self, nums, ans, i, allsubsets):
        if i == len(nums):
            allsubsets.append(ans[:])
            return
        # Include the current element
        ans.append(nums[i])
        self.getAllSubsets(nums, ans, i + 1, allsubsets)
        # Exclude the current element
        ans.pop()
        self.getAllSubsets(nums, ans, i + 1, allsubsets)

    def subsets(self, nums):
        allsubsets = []
        self.getAllSubsets(nums, [], 0, allsubsets)
        return allsubsets

# Example usage
solution = Solution()
nums = [1, 2, 3]
print(solution.subsets(nums))
