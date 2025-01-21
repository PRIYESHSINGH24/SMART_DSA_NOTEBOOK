class Solution:
    def chartostr(self, arr,N):
        # code here
        s = ""
        for i in arr:
            if i != " ":
                s += i
        return s
