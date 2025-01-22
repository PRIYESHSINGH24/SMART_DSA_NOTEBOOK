// PROBLEM ->Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

class Solution {
public:
void getAllSubsets(vector<int> & nums , vector<int>& ans , int i,vector<vector<int>> & allsubsets){

    if(i==nums.size()){
      allsubsets.push_back(ans);
      return;
    }
    //Include the current elements
    ans.push_back(nums[i]);
   getAllSubsets(nums,ans,i+1,allsubsets);
   //Exclude the current elements
   ans.pop_back();
    getAllSubsets(nums,ans,i+1,allsubsets);
}
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>>allsubsets;
        vector<int>ans;
        getAllSubsets(nums,ans,0,allsubsets);
        return allsubsets;

    }
};