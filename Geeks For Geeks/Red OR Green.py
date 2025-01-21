class Solution:
    def RedOrGreen(self,N,S):
        #code here
        return min(S.count("R"), S.count("G"))
