class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
       vector<vector<int>>ans;
       int n=nums.size();
       
       sort(nums.begin(),nums.end());
       for(int i=0 ;i<n-3 ; i++){
        if(i>0 && nums[i]==nums[i-1]) continue;
        for(int j=i+1 ;  j<n ;j++){
            if(j>i+1 && nums[j]==nums[j-1]) continue;
            int st=j+1 , end=n-1;
            while(st<end){
              long long sum=static_cast<long long>(nums[i])+nums[j]+nums[st]+nums[end];
                if(sum==target){
                    ans.push_back({nums[i],nums[j],nums[st],nums[end]});
                      st++ ;end--;
                    while(st<end && nums[st]==nums[st-1]) st++;
                    while(st<end  && nums[end]==nums[end+1] ) end--;
                  
                }else if (sum > target){
                    end--;
                }else{
                    st++;
                }
            }

        }
       } 
       return ans;
    }
};
