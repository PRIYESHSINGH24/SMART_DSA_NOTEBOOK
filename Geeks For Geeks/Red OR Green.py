class Solution:
    def RedOrGreen(self,N,S):
        return min(S.count("R"), S.count("G"))
