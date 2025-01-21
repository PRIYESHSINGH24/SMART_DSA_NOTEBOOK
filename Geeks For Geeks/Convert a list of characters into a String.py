class Solution:
    def chartostr(self, arr,N):
        s = ""
        for i in arr:
            if i != " ":
                s += i
        return s
