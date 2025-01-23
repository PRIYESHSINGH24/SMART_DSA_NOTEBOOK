def fill(req, length):
    # smallest zf atleast this length divisible by req
    ans = []
    for d in range(9, 1, -1):
        while req % d == 0:
            ans.append(d)
            req //= d
    
    ans.extend([1] * max(0, length - len(ans)))
    return "".join(map(str, reversed(ans)))

class Solution:
    def smallestNumber(self, S: str, T: int) -> str:
        N = len(S)
        t = T
        for p in [2, 3, 5, 7]:
            while t % p == 0:
                t //= p
        if t != 1:
            return "-1"

        P = [T] * (N + 1)
        for i, x in enumerate(map(int, S)):
            if x == 0: break
            P[i + 1] = P[i] // gcd(P[i], x)
        if P[-1] == 1:
            return S

        zero = S.find("0") % N
        for i in range(zero, -1, -1):
            req = P[i]
            digits = N - 1 - i
            for d in range(int(S[i]) + 1, 10):
                ending = fill(req // gcd(req, d), digits)
                if len(ending) <= digits:
                    return S[:i] + str(d) + ending

        return fill(T, len(S) + 1)
