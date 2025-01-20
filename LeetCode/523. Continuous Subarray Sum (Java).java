import java.util.HashMap;

class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        HashMap<Integer,Integer> ans = new HashMap<>();
        ans.put(0, -1);
        int sum = 0;
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
            int remainder = sum % k;
            if(ans.containsKey(remainder)){
                if(i - ans.get(remainder) >= 2){
                    return true;
                }
            }else{
                ans.put(remainder,i);
            }
        }
        return false;
    }
}
