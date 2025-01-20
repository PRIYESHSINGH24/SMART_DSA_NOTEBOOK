class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {

        var length = nums.count
        var index_list: [Int] = [] 

        for i in 0..<length{
            for j in i+1..<length{
                if (nums[i]+nums[j] == target){
                    index_list.append(i)
                    index_list.append(j)
                }
            }
        }
        return index_list
    }
}
