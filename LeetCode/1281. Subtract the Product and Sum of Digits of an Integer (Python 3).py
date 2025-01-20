class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        rem = 0          
        sum_n = 0      
        product_n = 1   

        while(n > 0):
            rem = n % 10  
            sum_n += rem  
            product_n *= rem  
            n //= 10     
          
        return product_n - sum_n
