class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        
        int max = 0;
        int row_size = accounts.size();  
        int col_size = accounts[0].size(); 
        for (int i = 0; i < row_size; i++) {
           
            int count = 0;
            for (int j = 0; j < col_size; j++) {
                count += accounts[i][j];
            }
            if (count > max) max = count;
        }
        return max;
    }
};
