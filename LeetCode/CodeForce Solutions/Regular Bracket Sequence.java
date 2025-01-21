
 /* Balanced Brackets

Problem: Regular Bracket Sequence (Codeforces 5C) 
Topic: Stacks, Strings 

*/

import java.util.Scanner;
import java.util.Stack;

public class RegularBracketSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        scanner.close();

        Stack<Integer> stack = new Stack<>();
        int[] dp = new int[s.length()];
        int maxLength = 0;
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else if (!stack.isEmpty()) {
                int openIndex = stack.pop();
                dp[i] = i - openIndex + 1;
                if (openIndex > 0) {
                    dp[i] += dp[openIndex - 1];
                }
                if (dp[i] > maxLength) {
                    maxLength = dp[i];
                    count = 1;
                } else if (dp[i] == maxLength) {
                    count++;
                }
            }
        }

        if (maxLength == 0) {
            System.out.println("0 1");
        } else {
            System.out.println(maxLength + " " + count);
        }
    }
}


/* Explanation:
Input: A string of parentheses.
Output: The length of the longest valid bracket sequence and the count of such sequences.
Approach:
Use a stack to track unmatched opening brackets.
Use a dynamic programming array (dp) to store the length of valid sequences ending at each index.
Update maxLength and count as longer sequences are found. */



