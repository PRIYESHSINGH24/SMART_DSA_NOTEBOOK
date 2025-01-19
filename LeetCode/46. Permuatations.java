import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        recrPerm(nums, 0 , ans);
        return ans;
    }
    public void recrPerm(int[] nums, int index, List<List<Integer>> ans) {
        if(index == nums.length){
            List<Integer> ds = new ArrayList<>();
            for(int i = 0; i < nums.length; i++) {
                ds.add(nums[i]);
            }
            ans.add(new ArrayList<>(ds));
            return;
        }
        for(int i = index; i < nums.length; i++) {
            swap(i, index, nums);
            recrPerm(nums, index + 1, ans);
            swap(i, index, nums);
        }
    }
    public void swap(int i, int index, int[] nums) {
        int t = nums[index];
        nums[index] = nums[i];
        nums[i] = t;
    }
}