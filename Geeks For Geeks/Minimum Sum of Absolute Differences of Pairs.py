class Solution:
    def findMinSum(self, A,B,N):
        A.sort()
        B.sort()
        res = 0
        for i in range (len(A)):
            res = res + abs(A[i] - B[i])
        return res
