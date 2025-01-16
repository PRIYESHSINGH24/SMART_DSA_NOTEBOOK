class Solution:
    def countOfElements(self, x, arr):
        count = 0
        for i in arr:
            if i <= x:
                count+=1
        return count
