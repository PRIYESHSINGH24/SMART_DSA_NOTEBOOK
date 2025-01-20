import java.util.HashSet;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int length = 0;
        int j = 0;
        for (int i = 0; i < s.length(); i++) {
            while (set.contains(s.charAt(i))) {
                set.remove(s.charAt(j));
                j++;
            }
            set.add(s.charAt(i));
            length = Math.max(length, i - j + 1);
        }
        return length;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test case 1
        String s1 = "abcabcbb";
        System.out.println("Longest Substring Length for '" + s1 + "': " + solution.lengthOfLongestSubstring(s1)); // Output should be 3
        
        // Test case 2
        String s2 = "bbbbb";
        System.out.println("Longest Substring Length for '" + s2 + "': " + solution.lengthOfLongestSubstring(s2)); // Output should be 1
        
        // Test case 3
        String s3 = "pwwkew";
        System.out.println("Longest Substring Length for '" + s3 + "': " + solution.lengthOfLongestSubstring(s3)); // Output should be 3
    }
}
