class Solution:
    def valueEqualToIndex(self, arr):
        l=[]
        for i in range(len(arr)):
            if i+1 == arr[i]:
                l.append(i+1)
        return l
