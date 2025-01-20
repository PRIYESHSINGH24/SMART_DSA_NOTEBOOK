class Solution(object):
    def twoSum(self, nums, target):

        n = len(nums)  
        index_list = [] 
      
        for i in range(n):
            for j in range(i+1, n):
                if nums[i] + nums[j] == target:
                    index_list.extend([i,j])

        return index_list
