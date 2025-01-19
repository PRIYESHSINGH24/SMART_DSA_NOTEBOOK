from typing import List

class Solution:
    def search(self, k: int, arr: List[int]) -> int:
        # code here
        if k in arr:
            return arr.index(k)+1
        else:
            return -1
