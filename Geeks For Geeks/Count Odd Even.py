class Solution:
	def countOddEven(self, arr):
		odd = 0
		even = 0
        for i in arr:
            if i%2==0:
                even += 1
            else:
                odd += 1
        return odd,even
