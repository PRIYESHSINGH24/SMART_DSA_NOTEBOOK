class Solution:
    def findUnion(self, a, b):
        union_set = set(a) | set(b)  
        return sorted(union_set)  
