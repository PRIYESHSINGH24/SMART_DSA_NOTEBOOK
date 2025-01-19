
class Solution:
    def isPrime(self, n):
        # Function to check if a number 'n' is prime
        for i in range(2, n):
            if n % i == 0:
                return False
        return True
