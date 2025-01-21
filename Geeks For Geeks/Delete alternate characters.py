class Solution:
    def delAlternate (ob, S):
        s = ""
        for i in range(len(S)):
            if i % 2 ==0 :
                s += S[i]
        return s
