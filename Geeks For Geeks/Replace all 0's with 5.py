class Solution:
    def convertFive(self, n):
        # Code here
        num = ""
        s = str(n)
        for i in s:
            if i == "0":
                num = num+"5"
            else:
                num=num+i
        return int(num)
