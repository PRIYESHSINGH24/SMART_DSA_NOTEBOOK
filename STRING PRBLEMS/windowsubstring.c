/*
Problem: Given two strings `s` and `t`, find the smallest window in `s` that contains all the characters of `t`.
Example: Input: s = "ADOBECODEBANC", t = "ABC" -> Output: "BANC"
*/

#include <stdio.h>
#include <string.h>
#include <limits.h>

void minWindowSubstring(char s[], char t[], char result[]) {
    int required[256] = {0}, found[256] = {0};
    int len_s = strlen(s), len_t = strlen(t);

    for (int i = 0; i < len_t; i++) {
        required[(int)t[i]]++;
    }

    int left = 0, count = 0, minLength = INT_MAX, start = -1;

    for (int right = 0; right < len_s; right++) {
        found[(int)s[right]]++;

        if (required[(int)s[right]] > 0 && found[(int)s[right]] <= required[(int)s[right]]) {
            count++;
        }

        while (count == len_t) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                start = left;
            }

            found[(int)s[left]]--;
            if (required[(int)s[left]] > 0 && found[(int)s[left]] < required[(int)s[left]]) {
                count--;
            }
            left++;
        }
    }

    if (start != -1) {
        strncpy(result, s + start, minLength);
        result[minLength] = '\0';
    } else {
        strcpy(result, "");
    }
}

int main() {
    char s[] = "ADOBECODEBANC";
    char t[] = "ABC";
    char result[100];
    minWindowSubstring(s, t, result);
    printf("Minimum window substring: %s\n", result);
    return 0;
}
