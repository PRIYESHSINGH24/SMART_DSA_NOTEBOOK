#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

int minCost(int n, vector<int>& cuts) {
    // Add boundaries to the cuts and sort
    cuts.push_back(0);
    cuts.push_back(n);
    sort(cuts.begin(), cuts.end());
    int m = cuts.size();
    
    // Initialize DP table
    vector<vector<int>> dp(m, vector<int>(m, 0));
    
    // Fill the DP table
    for (int length = 2; length < m; ++length) { // Length of the segment
        for (int i = 0; i < m - length; ++i) {
            int j = i + length;
            dp[i][j] = INT_MAX;
            for (int k = i + 1; k < j; ++k) { // Try all possible cuts
                int cost = cuts[j] - cuts[i];
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + cost);
            }
        }
    }
    
    return dp[0][m - 1];
}

int main() {
    // Example Input
    int n = 7;
    vector<int> cuts = {1, 3, 4, 5};

    // Output the minimum cost
    cout << "Minimum Cost: " << minCost(n, cuts) << endl;
    return 0;
}
