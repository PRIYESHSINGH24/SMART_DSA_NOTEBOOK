class Solution:
    def strongPasswordChecker(self, password: str) -> int:
        n = len(password)
        has_lower = any(c.islower() for c in password)
        has_upper = any(c.isupper() for c in password)
        has_digit = any(c.isdigit() for c in password)

        changes = 3 - sum([has_lower, has_upper, has_digit])
        repeats = 0
        one_change = two_change = 0
        
        i = 2
        while i < n:
            if password[i] == password[i-1] == password[i-2]:
                length = 2
                while i < n and password[i] == password[i-1]:
                    length += 1
                    i += 1
                repeats += length // 3
                if length % 3 == 0:
                    one_change += 1
                elif length % 3 == 1:
                    two_change += 1
            else:
                i += 1
        
        if n < 6:
            return max(changes, 6 - n)
        elif n <= 20:
            return max(changes, repeats)
        else:
            delete_steps = n - 20
            repeats -= min(delete_steps, one_change)
            repeats -= min(max(delete_steps - one_change, 0), two_change * 2) // 2
            repeats -= max(delete_steps - one_change - two_change * 2, 0) // 3
            return delete_steps + max(changes, repeats)
