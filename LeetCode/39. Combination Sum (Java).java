import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> ds = new ArrayList<>();
        combination(candidates, target, 0, ans, ds);
        return ans;
    }
    public void combination(int[] candidates, int target, int index, List<List<Integer>> ans, List<Integer> ds) {
        //base case
        if(index == candidates.length) {
            if(target == 0) {
                ans.add(new ArrayList<>(ds));
            }
            return ;
        }
        //pick
        if(candidates[index] <= target) {
            ds.add(candidates[index]);
            combination(candidates, target - candidates[index], index, ans,ds);
            ds.remove(ds.size()-1);
        }
        //not pick
        combination(candidates, target, index+1, ans,ds);
    }
}
