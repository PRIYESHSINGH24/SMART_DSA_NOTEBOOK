/*
Problem: Find the longest palindromic substring in a given string.
Example: Input: "babad" -> Output: "bab" (or "aba")
*/

#include <stdio.h>
#include <string.h>

void longestPalindromicSubstring(char str[], char result[]) {
    int n = strlen(str);
    int start = 0, maxLength = 1;

    int dp[n][n];
    memset(dp, 0, sizeof(dp));

    for (int i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (int i = 0; i < n - 1; i++) {
        if (str[i] == str[i + 1]) {
            dp[i][i + 1] = 1;
            start = i;
            maxLength = 2;
        }
    }

    for (int len = 3; len <= n; len++) {
        for (int i = 0; i < n - len + 1; i++) {
            int j = i + len - 1;
            if (str[i] == str[j] && dp[i + 1][j - 1]) {
                dp[i][j] = 1;
                start = i;
                maxLength = len;
            }
        }
    }

    strncpy(result, str + start, maxLength);
    result[maxLength] = '\0';
}

int main() {
    char str[] = "babad";
    char result[100];
    longestPalindromicSubstring(str, result);
    printf("Longest palindromic substring: %s\n", result);
    return 0;
}
