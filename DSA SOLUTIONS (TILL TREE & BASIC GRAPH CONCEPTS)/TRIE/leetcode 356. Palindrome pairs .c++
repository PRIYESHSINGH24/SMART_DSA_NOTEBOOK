class TrieNode {
public:
    char data;
    TrieNode* children[26];
    int stringNumber; // Index of the word in the original array
    TrieNode(char ch) : data(ch), stringNumber(-1) {
        for (int i = 0; i < 26; i++) children[i] = nullptr;
    }
};

class Trie {
    TrieNode* root;

    void insertUtil(TrieNode* root, string& word, int i, int& stringNumber) {
        if (i >= word.size()) {
            root->stringNumber = stringNumber;
            return;
        }
        int index = word[i] - 'a';
        if (!root->children[index]) {
            root->children[index] = new TrieNode(word[i]);
        }
        insertUtil(root->children[index], word, i + 1, stringNumber);
    }

    bool isPalindrome(string& s, int low, int high) {
        while (low <= high) {
            if (s[low] != s[high]) return false;
            low++;
            high--;
        }
        return true;
    }

    void searchCase2(TrieNode* root, vector<int>& myPalindrome, string s) {
        if (root->stringNumber != -1) {
            if (isPalindrome(s, 0, s.size() - 1)) {
                myPalindrome.push_back(root->stringNumber);
            }
        }
        for (int i = 0; i < 26; i++) {
            if (root->children[i]) {
                s.push_back(i + 'a');
                searchCase2(root->children[i], myPalindrome, s);
                s.pop_back(); // Backtrack
            }
        }
    }

public:
    Trie() {
        root = new TrieNode('\0');
    }

    void insert(string& word, int& stringNumber) {
        insertUtil(root, word, 0, stringNumber);
    }

    void search(string& word, vector<int>& myPalindrome) {
        TrieNode* curr = root;

        // Case 1: Prefix of string matches a word in Trie
        for (int i = 0; i < word.size(); i++) {
            int index = word[i] - 'a';
            if (curr->stringNumber != -1) {
                // Check if the rest of the word is a palindrome
                if (isPalindrome(word, i, word.size() - 1)) {
                    myPalindrome.push_back(curr->stringNumber);
                }
            }
            if (curr->children[index]) {
                curr = curr->children[index];
            } else {
                return;
            }
        }

        // Case 2: Word is a prefix of a word in Trie
        // check remaining subtree in the trie for the palindrom
        // this code is only reachable when word.size() is less than the length of word in trie
        searchCase2(curr, myPalindrome, "");
    }
};

class Solution {
public:
    vector<vector<int>> palindromePairs(vector<string>& words) {
        vector<vector<int>> ans;
        Trie trie;

        // Insert all words in reverse order into the Trie
        for (int i = 0; i < words.size(); i++) {
            string rword = words[i];
            reverse(rword.begin(), rword.end());
            trie.insert(rword, i);
        }

        // Find palindrome pairs for each word
        for (int i = 0; i < words.size(); i++) {
            vector<int> myPalindrome;
            trie.search(words[i], myPalindrome);
            for (auto it : myPalindrome) {
                if (i != it) ans.push_back({i, it});
            }
        }

        return ans;
    }
};