class Solution:
    def longest(self, arr, n):
        count = 1
        for i in arr:
            count *= i
        return count
