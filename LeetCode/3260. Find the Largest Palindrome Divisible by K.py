class Solution:
    def largestPalindrome(self, n: int, k: int) -> str:
        if k == 1:
            return '9' * n
        elif k == 2:
            if n <= 2:
                return '8' * n
            else:
                return '8' + '9' * (n - 2) + '8'
        elif k == 3 or k == 9:
            return '9' * n
        elif k == 4:
            if n <= 4:
                return '8' * n
            else:
                return '88' + '9' * (n - 4) + '88'
        elif k == 5:
            if n <= 2:
                return '5' * n
            else:
                return '5' + '9' * (n - 2) + '5'
        elif k == 6:
            if n <= 2:
                return '6' * n
            elif n % 2 == 1:
                l = n // 2 - 1
                return '8' + '9' * l + '8' + '9' * l + '8'
            else:
                l = n // 2 - 2
                return '8' + '9' * l + '77' + '9' * l + '8'
        elif k == 8:
            if n <= 6:
                return '8' * n
            else:
                return '888' + '9' * (n - 6) + '888'
        else:
            dic = {0: '', 1: '7', 2: '77', 3: '959', 4: '9779', 5: '99799', 6: '999999', 7: '9994999',
                       8: '99944999', 9: '999969999', 10: '9999449999', 11: '99999499999'}
            l, r = divmod(n, 12)
            return '999999' * l + dic[r] + '999999' * l
