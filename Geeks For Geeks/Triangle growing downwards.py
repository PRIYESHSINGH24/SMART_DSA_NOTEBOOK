class Solution:
    def printTriangleDownwards(self, s):
        # code here
        d_count = len(s)
        for i in range(1,len(s)+1):
            nc = d_count - i
            print("."*nc + s[:i])
