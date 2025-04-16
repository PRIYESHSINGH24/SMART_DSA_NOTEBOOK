
// Mock data for problems
export const mockProblems = {
  leetcode: [
    { id: "1", title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"], progress: 100 },
    { id: "2", title: "Regular Expression Matchings", difficulty: "Medium", tags: ["Linked List", "Math"], progress: 75 },
    { id: "3", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", tags: ["String", "Sliding Window"], progress: 0 },
  ],
  hackerrank: [
    { id: "1", title: "Solve Me First", difficulty: "Easy", tags: ["Basic"], progress: 100 },
    { id: "2", title: "Simple Array Sum", difficulty: "Easy", tags: ["Array"], progress: 50 },
    { id: "3", title: "Compare the Triplets", difficulty: "Easy", tags: ["Array"], progress: 0 },
  ],
  codeforces: [
    { id: "1", title: "Watermelon", difficulty: "Easy", tags: ["Math"], progress: 100 },
    { id: "2", title: "Way Too Long Words", difficulty: "Easy", tags: ["String"], progress: 0 },
    { id: "3", title: "Theatre Square", difficulty: "Easy", tags: ["Math"], progress: 0 },
  ]
};

// Mock data for solutions
export const mockSolutions = {
  "leetcode-1": `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {}; // No solution found
    }
};`,
  "leetcode-2": `class Solution {
public:
    bool isMatch(string s, string p) {
        int n = s.length(), m = p.length();
        bool dp[n+1][m+1];
        memset(dp, false, sizeof(dp));
        dp[0][0] = true;
        
        for(int i=0; i<=n; i++){
            for(int j=1; j<=m; j++){
                if(p[j-1] == '*'){
                    dp[i][j] = dp[i][j-2] || (i > 0 && (s[i-1] == p[j-2] || p[j-2] == '.') && dp[i-1][j]);
                }
                else{
                    dp[i][j] = i > 0 && dp[i-1][j-1] && (s[i-1] == p[j-1] || p[j-1] == '.');
                }
            }
        }
        
        return dp[n][m];
    }
};`,
  "hackerrank-1": `function solveMeFirst(a, b) {
  return a + b;
}`
};

// Mock comments data
export const mockComments = [
  { id: "1", username: "CodeMaster", avatar: "https://source.unsplash.com/random/100x100/?portrait", comment: "This is a really efficient solution. I like how you used a hashmap to reduce the time complexity to O(n).", timestamp: "2 days ago", likes: 5 },
  { id: "2", username: "AlgoExpert", avatar: "https://source.unsplash.com/random/100x100/?portrait&2", comment: "I would suggest using forEach instead of a for loop for better readability.", timestamp: "1 day ago", likes: 2 }
];
