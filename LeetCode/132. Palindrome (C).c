#include <stdio.h>
#include <string.h>
#include <limits.h>
#include <stdbool.h>

#define MAX 2001

bool isPalindrome(const char *s, int start, int end) {
    while (start < end) {
        if (s[start] != s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

int minCut(char *s) {
    int n = strlen(s);
    int dp[MAX];
    
    for (int i = 0; i < n; i++) {
        dp[i] = i;  // maximum cuts
    }
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            if (isPalindrome(s, j, i)) {
                dp[i] = (j == 0) ? 0 : (dp[j - 1] + 1);
            }
        }
    }
    
    return dp[n - 1];
}

int main() {
    char s[] = "aab";
    printf("Minimum cuts needed: %d\n", minCut(s));
    return 0;
}
