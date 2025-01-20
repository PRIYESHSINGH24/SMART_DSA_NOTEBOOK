class Solution(object):
    def maximumWealth(self, accounts):
        wealth = sum(accounts[0]) 

        for i in accounts:
            if sum(i) > wealth:
                wealth = sum(i)
              
        return wealth
