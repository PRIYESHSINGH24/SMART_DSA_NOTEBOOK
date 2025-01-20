class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        n = len(nums)  
        index_list = []  

        for i in range(n):
            for j in range(i+1, n):
                if nums[i] + nums[j] == target:
                    index_list.extend([i,j])

        return index_list
