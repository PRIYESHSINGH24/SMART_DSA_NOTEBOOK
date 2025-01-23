/*
Problem: Write a function to reverse a string.
Example: Input: "hello" -> Output: "olleh"
*/

#include <stdio.h>
#include <string.h>

void reverseString(char str[]) {
    int n = strlen(str);
    for (int i = 0; i < n / 2; i++) {
        char temp = str[i];
        str[i] = str[n - i - 1];
        str[n - i - 1] = temp;
    }
}

int main() {
    char str[] = "hello";
    reverseString(str);
    printf("Reversed string: %s\n", str);
    return 0;
}
