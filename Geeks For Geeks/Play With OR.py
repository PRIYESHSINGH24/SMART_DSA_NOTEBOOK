class Solution:
    def game_with_number (self, arr,  n): 
        l = []
        for i in range(n-1):
            l.append(arr[i] | arr[i+1])
        l.append(arr[-1])
        return l
