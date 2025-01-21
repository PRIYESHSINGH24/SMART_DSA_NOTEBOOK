class Solution(object):
    def countEven(self, num):
        count = 0
        
        # Iterate through each number from 1 to num (inclusive)
        for i in range(1, num + 1):
            rem = 0  
            sum_digit = 0 
            
            # If the number is less than 10 and is even, it's directly counted
            if i < 10 and i % 2 == 0:
                count += 1
            else:
                temp = i 
                while temp > 0:
                    rem = temp % 10  
                    sum_digit += rem  
                    temp = temp // 10  
                
                # If the sum of digits is even, increment the count
                if sum_digit % 2 == 0:
                    count += 1
        
        return count
