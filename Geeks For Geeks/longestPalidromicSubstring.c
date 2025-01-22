//Problem Statement: Given a string s, find the longest substring that is a palindrome.

#include <stdio.h>
#include <string.h>

// Function to expand around center and find the length of palindrome
int expandAroundCenter(char *s, int left, int right) {
    while (left >= 0 && right < strlen(s) && s[left] == s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

// Function to find the longest palindromic substring
char* longestPalindrome(char *s) {
    int start = 0, end = 0;
    for (int i = 0; i < strlen(s); i++) {
        int len1 = expandAroundCenter(s, i, i);
        int len2 = expandAroundCenter(s, i, i + 1);
        int len = len1 > len2 ? len1 : len2;
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    char *result = (char *)malloc((end - start + 2) * sizeof(char));
    strncpy(result, s + start, end - start + 1);
    result[end - start + 1] = '\0';
    return result;
}

int main() {
    char s[] = "babad";
    char *result = longestPalindrome(s);
    printf("Longest Palindromic Substring: %s\n", result);
    free(result);
    return 0;
}
