public class Solution {
    public int CountEven(int num) {
        int count = 0;
        int digitSum = 0;

        for (int i = 1; i <= num; ++i) {
            int temp = i;
            int sum = 0;

            // Calculate the sum of digits of `i`
            while (temp > 0) {
                sum += temp % 10;
                temp /= 10;
            }

            // Increment count if the sum of digits is even
            if (sum % 2 == 0) {
                ++count;
            }
        }

        return count;
        
    }
}
