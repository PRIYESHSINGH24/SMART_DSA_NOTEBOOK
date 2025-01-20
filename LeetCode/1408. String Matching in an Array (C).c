bool isSubstring(const char *str, const char *substr) {
    return strstr(str, substr) != NULL;
}

void stringMatching(char *words[], int wordsSize) {
    char *result[wordsSize];
    int resultSize = 0;

    for (int i = 0; i < wordsSize; i++) {
        for (int j = 0; j < wordsSize; j++) {
            if (i != j && isSubstring(words[j], words[i])) {
                result[resultSize++] = words[i];
                break;
            }
        }
    }
