class Solution:
    def getFinalState(self, nums: List[int], k: int, 
                multiplier: int, mod = 1_000_000_007) -> List[int]:

        if multiplier == 1: return nums                     # <- 1)

        n = len(nums)
        unseen, ans = set(range(n)), [0] * n

        heapify(heap:= list(zip(nums, range(len(nums)))))   # <- 2)

        while k > 0 and unseen:                             # <- 3)
            num, idx = heap[0]                              
            heappushpop(heap, (num * multiplier, idx))
            k-= 1
            unseen.discard(idx)

        for i in range(n):                                  # <- 4)
            num, idx = heappop(heap)
            ans[idx] = (num * pow(multiplier,
                              k//n + (i < k%n), mod)) % mod

        return ans                                          # <- 5)
