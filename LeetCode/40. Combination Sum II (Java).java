import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> ds = new ArrayList<>();
        Arrays.sort(candidates);
        combination(candidates, target, ans, ds, 0);
        return ans;
    }
    public void combination(int[] candidates, int target, List<List<Integer>> ans, List<Integer> ds, int index) {
        //base case
        if(target == 0) {
            ans.add(new ArrayList<>(ds));
            return ;
        }
        for(int i = index ; i < candidates.length; i++) {

            //not pick
            if(i > index && candidates[i] == candidates[i-1])   continue;
            if(candidates[i] > target) break;

            //pick 
            ds.add(candidates[i]);
            combination(candidates, target - candidates[i], ans, ds, i + 1);
            ds.remove(ds.size() - 1);
        }
    }
}
