class Solution {
    public int scoreOfString(String s) {
        int sum = 0;
        for(int i = 0; i < s.length() - 1; i++) {
            int first = (int)(s.charAt(i));
            int scnd = (int)(s.charAt(i+1));
            sum += Math.abs(first - scnd);
        }
        return sum;
    }
}