class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        wealth = sum(accounts[0]) 

        for i in accounts:
            if sum(i) > wealth:
                wealth = sum(i)
              
        return wealth
