class Solution:
	def firstAlphabet(self, S):
		# code here
		first_word = ""
		S = S.split()
		for i in S:
		    first_word = first_word + i[0]
		return first_word
