int isPrefixOfWord(char *sentence, char *searchWord) {
    char *word;
    int count = 0;
    word = strtok(sentence, " ");
    
    while (word != NULL) {
        count++;  
        if (strncmp(word, searchWord, strlen(searchWord)) == 0) {
            return count; 
        }
        word = strtok(NULL, " ");  
    }

    return -1;  
}
