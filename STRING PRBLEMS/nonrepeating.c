/*
Problem: Find the first non-repeating character in a string.
If none exists, return 'None'.
Example: Input: "swiss" -> Output: "w"
*/

#include <stdio.h>
#include <string.h>

char firstNonRepeatingCharacter(char str[]) {
    int freq[256] = {0};
    for (int i = 0; str[i] != '\0'; i++) {
        freq[(int)str[i]]++;
    }
    for (int i = 0; str[i] != '\0'; i++) {
        if (freq[(int)str[i]] == 1)
            return str[i];
    }
    return '\0';
}

int main() {
    char str[] = "swiss";
    char result = firstNonRepeatingCharacter(str);
    if (result) {
        printf("First non-repeating character: %c\n", result);
    } else {
        printf("None\n");
    }
    return 0;
}
