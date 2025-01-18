class Solution:
    def findMajority(self, arr):
        n = len(arr)
        l = []

        frequency = {}
        for num in arr:
            if num in frequency:
                frequency[num] += 1
            else:
                frequency[num] = 1

        for num in frequency:
            if frequency[num] > (n / 3):
                l.append(num)

        return sorted(l)
