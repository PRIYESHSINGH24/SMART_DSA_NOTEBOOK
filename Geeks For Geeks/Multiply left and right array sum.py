class Solution:
    def multiply(self, arr):
        n = len(arr) // 2
        return sum(arr[:n]) * sum(arr[n:])
