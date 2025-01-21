//Solution 1
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        vector <int>v(nums.size());
        for (int i =0; i<nums.size(); i++){
            v[(i+k)%nums.size()]=nums[i];

     
        }
        nums=v;
    }
};


// Solution 2

class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n;
        if (k != 0) {
            vector<int> temp(nums.end() - k, nums.end());
            temp.insert(temp.end(), nums.begin(), nums.end() - k);
            copy(temp.begin(), temp.end(), nums.begin());
        }        
    }
};
