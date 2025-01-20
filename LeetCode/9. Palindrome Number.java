public class Solution {
    public boolean isPalindrome(int x) {
        int n = x;
        int reverse = 0;
        if (n < 0) {
            return false;
        }
        while (n > 0) {
            int m = n % 10;
            reverse = reverse * 10 + m;
            n /= 10;
        }        
        return (reverse == x);
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test case 1
        int number1 = 121;
        System.out.println("Is " + number1 + " a palindrome? " + solution.isPalindrome(number1)); // Output should be true
        
        // Test case 2
        int number2 = -121;
        System.out.println("Is " + number2 + " a palindrome? " + solution.isPalindrome(number2)); // Output should be false
        
        // Test case 3
        int number3 = 10;
        System.out.println("Is " + number3 + " a palindrome? " + solution.isPalindrome(number3)); // Output should be false
    }
}
