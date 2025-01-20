class Solution:
    def isMatch(self, s, p):
        mat = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        mat[0][0] = True

        for i in range(1, len(p) + 1):
            if p[i - 1] == '*':
                mat[0][i] = mat[0][i - 2]

        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                    mat[i][j] = mat[i - 1][j - 1]
                elif p[j - 1] == '*':
                    mat[i][j] = mat[i][j - 2]
                    if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                        mat[i][j] = mat[i][j] or mat[i - 1][j]
                else:
                    mat[i][j] = False

        return mat[len(s)][len(p)]
