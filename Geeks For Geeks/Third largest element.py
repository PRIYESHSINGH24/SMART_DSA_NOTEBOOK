class Solution:
    def thirdLargest(self,arr):
        arr.sort()
        if len(arr) == 2:
            return arr[-1]
        elif len(arr) == 1:
            return arr[0]
        elif len(arr)>=3:
            return arr[-3]
