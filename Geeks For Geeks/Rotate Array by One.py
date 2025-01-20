class Solution:
    def rotate(self, arr):
        value = arr.pop()
        arr.insert(0,value)
        return arr
