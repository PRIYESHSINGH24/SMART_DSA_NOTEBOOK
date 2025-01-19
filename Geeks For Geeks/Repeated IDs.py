class Solution:
    def uniqueId(self, arr):
        #  code here
        l = []
        for i in arr:
            if i not in l:
                l.append(i)
        return l
