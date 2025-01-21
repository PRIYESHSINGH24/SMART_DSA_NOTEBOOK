class Solution:
    def delAlternate (ob, S):
        # code here 
        s = ""
        for i in range(len(S)):
            if i % 2 ==0 :
                s += S[i]
        return s
