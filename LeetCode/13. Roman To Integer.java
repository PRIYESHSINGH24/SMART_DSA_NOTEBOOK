import java.util.HashMap;

class Solution {
    public int romanToInt(String str) {
        HashMap<Character, Integer> mp = new HashMap<Character, Integer>();
        mp.put('I', 1);
        mp.put('V', 5);
        mp.put('X', 10);
        mp.put('L', 50);
        mp.put('C', 100);
        mp.put('D', 500);
        mp.put('M', 1000);
        
        int ans = 0, prev = 0;

        for (int i = str.length() - 1; i >= 0; i--) {
            int curr = mp.get(str.charAt(i));

            if (curr >= prev) {
                ans += curr;
            } else if (curr < prev) {
                ans -= curr;
            }
            prev = curr;
        }
        return ans;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test case 1
        String roman1 = "III";
        System.out.println("Roman to Integer for " + roman1 + ": " + solution.romanToInt(roman1)); // Output: 3

        // Test case 2
        String roman2 = "IV";
        System.out.println("Roman to Integer for " + roman2 + ": " + solution.romanToInt(roman2)); // Output: 4

        // Test case 3
        String roman3 = "IX";
        System.out.println("Roman to Integer for " + roman3 + ": " + solution.romanToInt(roman3)); // Output: 9

        // Test case 4
        String roman4 = "LVIII";
        System.out.println("Roman to Integer for " + roman4 + ": " + solution.romanToInt(roman4)); // Output: 58

        // Test case 5
        String roman5 = "MCMXCIV";
        System.out.println("Roman to Integer for " + roman5 + ": " + solution.romanToInt(roman5)); // Output: 1994
    }
}
