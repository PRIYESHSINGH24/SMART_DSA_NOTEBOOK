class Solution:
    def URLify(self, s): 
        S = ""
        for i in s:
            if i == " ":
                S += "%20"
            else:
                S += i
        return S
