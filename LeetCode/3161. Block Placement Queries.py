class BIT:
    def __init__(self, n):
        self.n = n
        self.l = [0] * (n + 1)
    def add(self, i, x):
        i += 1
        while i <= self.n:
            self.l[i] = max(x, self.l[i])
            i += i & -i
    def query(self, i):
        i += 1
        ans = 0
        while i:
            ans = max(ans, self.l[i])
            i -= i & -i
        return ans

from sortedcontainers import SortedList
    
class Solution:
    def getResults(self, queries: List[List[int]]) -> List[bool]:
        sl = SortedList()
        n = min(5 * 10 ** 4, len(queries) * 3)
        sl.add(0)
        sl.add(n)
        
        ans = []
        for q in queries:
            if q[0] == 1:
                x = q[1]
                sl.add(x)
        
        bit = BIT(n + 1)
        for x, y in pairwise(sl):
            bit.add(y, y - x)
        
        for q in reversed(queries):
            if q[0] == 1:
                x = q[1]
                index = sl.index(x)
                after = sl[index + 1]
                before = sl[index - 1]
                sl.remove(x)
                bit.add(after, after - before)
            else:
                _, x, sz = q
                index = sl.bisect_right(x)
                before = sl[index - 1]
                ans.append(bit.query(before) >= sz or (x - before) >= sz)
            
        ans.reverse()
        return ans
