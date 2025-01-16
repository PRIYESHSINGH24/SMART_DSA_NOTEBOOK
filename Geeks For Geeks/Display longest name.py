class Solution:
    def longest(self, names):
        long_name = names[0]
        for i in names:
            if len(i) > len(long_name):
                long_name = i
        return long_name
