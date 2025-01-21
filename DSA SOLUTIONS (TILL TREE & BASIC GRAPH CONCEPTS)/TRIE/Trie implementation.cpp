#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

/*
Trie Implementation:
A Trie (pronounced as "try") is a tree data structure used for efficiently storing and searching strings. It is particularly useful for tasks like autocomplete, dictionary word search, and prefix matching.

Basic Operations:
1. Insert: Adds a word to the Trie.
2. Search: Checks if a word exists in the Trie.
3. StartsWith: Checks if there exists any word in the Trie that starts with a given prefix.

Key Points:
- Each node in the Trie represents a single character.
- The root node is empty and does not hold any character.
- A boolean flag "isEndOfWord" indicates if a node marks the end of a valid word.
*/

class TrieNode {
public:
    unordered_map<char, TrieNode*> children; // Maps characters to their corresponding Trie nodes
    bool isEndOfWord; // True if the node marks the end of a word

    TrieNode() {
        isEndOfWord = false; // Initialize as false
    }
};

class Trie {
private:
    TrieNode* root; // Root of the Trie

public:
    // Constructor: Initializes the Trie with an empty root node
    Trie() {
        root = new TrieNode();
    }

    // Insert a word into the Trie
    void insert(string word) {
        TrieNode* current = root; // Start from the root
        for (char c : word) {
            // If the character does not exist, create a new TrieNode
            if (current->children.find(c) == current->children.end()) {
                current->children[c] = new TrieNode();
            }
            current = current->children[c]; // Move to the next node
        }
        current->isEndOfWord = true; // Mark the end of the word
    }

    // Search for a word in the Trie
    bool search(string word) {
        TrieNode* current = root; // Start from the root
        for (char c : word) {
            // If the character is not found, the word does not exist
            if (current->children.find(c) == current->children.end()) {
                return false;
            }
            current = current->children[c]; // Move to the next node
        }
        return current->isEndOfWord; // Return true if it is the end of a word
    }

    // Check if any word in the Trie starts with the given prefix
    bool startsWith(string prefix) {
        TrieNode* current = root; // Start from the root
        for (char c : prefix) {
            // If the character is not found, no word with the prefix exists
            if (current->children.find(c) == current->children.end()) {
                return false;
            }
            current = current->children[c]; // Move to the next node
        }
        return true; // If all characters of the prefix are found, return true
    }
};

int main() {
    Trie trie;

    // Insert words into the Trie
    trie.insert("apple");
    trie.insert("app");
    trie.insert("bat");
    trie.insert("ball");

    // Search for words in the Trie
    cout << (trie.search("apple") ? "apple is found" : "apple is not found") << endl;
    cout << (trie.search("app") ? "app is found" : "app is not found") << endl;
    cout << (trie.search("bat") ? "bat is found" : "bat is not found") << endl;
    cout << (trie.search("batman") ? "batman is found" : "batman is not found") << endl;

    // Check for prefixes in the Trie
    cout << (trie.startsWith("ap") ? "Prefix 'ap' exists" : "Prefix 'ap' does not exist") << endl;
    cout << (trie.startsWith("ba") ? "Prefix 'ba' exists" : "Prefix 'ba' does not exist") << endl;
    cout << (trie.startsWith("cat") ? "Prefix 'cat' exists" : "Prefix 'cat' does not exist") << endl;

    return 0;
}
