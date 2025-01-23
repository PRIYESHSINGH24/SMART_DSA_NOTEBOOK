/*
Problem: Check if a string is a palindrome (reads the same backward as forward).
Ignore case and spaces.
Example: Input: "A man a plan a canal Panama" -> Output: "Yes"
*/

#include <stdio.h>
#include <ctype.h>
#include <string.h>

int isPalindrome(char str[]) {
    int left = 0, right = strlen(str) - 1;
    while (left < right) {
        while (left < right && !isalnum(str[left])) left++;
        while (left < right && !isalnum(str[right])) right--;
        if (tolower(str[left]) != tolower(str[right]))
            return 0;
        left++;
        right--;
    }
    return 1;
}

int main() {
    char str[] = "A man a plan a canal Panama";
    if (isPalindrome(str)) {
        printf("Yes\n");
    } else {
        printf("No\n");
    }
    return 0;
}
