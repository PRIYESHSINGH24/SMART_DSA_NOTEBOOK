from typing import List
class Solution:
    def isPerfect(self, arr : List[int]) -> bool:
        pal_arr = arr[::-1]
        return arr == pal_arr
