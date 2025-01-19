class Solution:
    def leftRotate(self, arr, d):
        n = len(arr)
        d = d % n
        arr[:] = arr[d:] + arr[:d]  
        return arr
