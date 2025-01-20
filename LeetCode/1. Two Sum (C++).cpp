class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

        int n = nums.size(); 
        vector<int> index_list; 

        for (int i = 0; i<n; i++){
            for (int j = i+1; j<n; j++){
                if (nums[i] + nums[j] == target){
                    index_list.push_back(i);
                    index_list.push_back(j);
                }
            }
        }
        return index_list;
    }
};
