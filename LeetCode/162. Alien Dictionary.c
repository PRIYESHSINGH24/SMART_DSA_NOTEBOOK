#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

#define MAX 26

void addEdge(int adjMatrix[MAX][MAX], char from, char to) {
    adjMatrix[from - 'a'][to - 'a'] = 1;
}

bool topologicalSortUtil(int v, bool visited[], bool *stack, int adjMatrix[MAX][MAX], char result[]) {
    if (stack[v]) return false;
    if (visited[v]) return true;
    
    visited[v] = true;
    stack[v] = true;
    
    for (int i = 0; i < MAX; i++) {
        if (adjMatrix[v][i] && !topologicalSortUtil(i, visited, stack, adjMatrix, result)) {
            return false;
        }
    }
    
    result[v] = v + 'a';
    stack[v] = false;
    
    return true;
}

char* alienOrder(char** words, int wordsSize, int* returnSize) {
    int adjMatrix[MAX][MAX] = {0};
    bool visited[MAX] = {0};
    bool stack[MAX] = {0};
    *returnSize = MAX;
    
    for (int i = 0; i < wordsSize - 1; i++) {
        char *word1 = words[i];
        char *word2 = words[i + 1];
        int len1 = strlen(word1), len2 = strlen(word2);
        for (int j = 0; j < len1 && j < len2; j++) {
            if (word1[j] != word2[j]) {
                addEdge(adjMatrix, word1[j], word2[j]);
                break;
            }
        }
    }
    
    char *result = (char *)malloc(sizeof(char) * (MAX + 1));
    memset(result, 0, sizeof(char) * (MAX + 1));
    
    for (int i = 0; i < MAX; i++) {
        if (!visited[i] && !topologicalSortUtil(i, visited, stack, adjMatrix, result)) {
            return "";
        }
    }
    
    return result;
}

int main() {
    char *words[] = {"wrt", "wrf", "er", "ett", "rftt"};
    int wordsSize = 5;
    int returnSize;
    
    char *order = alienOrder(words, wordsSize, &returnSize);
    
    if (*order == '\0') {
        printf("Invalid Alien Dictionary\n");
    } else {
        printf("Alien Dictionary Order: %s\n", order);
    }
    
    return 0;
}
