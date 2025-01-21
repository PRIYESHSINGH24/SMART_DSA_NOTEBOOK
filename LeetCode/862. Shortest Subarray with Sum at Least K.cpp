class Solution {
public:
    int shortestSubarray(vector<int>& nums, int k) {
        int n = nums.size();
        vector<long long >comSum(n,0);
        deque<int>dq;// stores index in monotomic increasing order of cummolativesum 

       int result = INT_MAX; /// need to find the minimum size subaray whose sum >=k
       int j = 0 ; 
    

       while(j<n ){
        if(j==0){
            comSum[j] = nums[j];
        }
        else{
            comSum[j] = comSum[j - 1] + nums[j];
        }

         if(comSum[j]>=k){
            result = min(result , j+1);
         }
         //need to shringk the window or not 
         while(!dq.empty() && comSum[j] - comSum[dq.front()] >=k ){
            result = min(result ,j- dq.front());
            dq.pop_front();
         }


         while(!dq.empty()  && comSum[j]<=comSum[dq.back()]){
            dq.pop_back();
         }
         dq.push_back(j);
         j++;
       }
        
      return result==INT_MAX ?-1:result ; 

    }
};
// Time complexity -> O(n);
// Space complexity -> O(n);