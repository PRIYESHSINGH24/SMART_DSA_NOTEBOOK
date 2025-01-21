/* Dynamic Programming

Problem: Frog Jump (Codeforces 1407B)
Topic: DP, Greedy */

import java.util.*;

public class FrogJump {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();

        while (t-- > 0) {
            int n = scanner.nextInt();
            int[] a = new int[n];

            for (int i = 0; i < n; i++) {
                a[i] = scanner.nextInt();
            }

            Arrays.sort(a);

            int gcd = a[n - 1];
            List<Integer> result = new ArrayList<>();
            result.add(gcd);
            boolean[] visited = new boolean[n];
            visited[n - 1] = true;

            for (int i = 1; i < n; i++) {
                int maxGCD = 0, idx = -1;

                for (int j = 0; j < n; j++) {
                    if (!visited[j]) {
                        int currentGCD = gcd(gcd, a[j]);
                        if (currentGCD > maxGCD) {
                            maxGCD = currentGCD;
                            idx = j;
                        }
                    }
                }

                gcd = maxGCD;
                visited[idx] = true;
                result.add(a[idx]);
            }

            for (int num : result) {
                System.out.print(num + " ");
            }
            System.out.println();
        }

        scanner.close();
    }

    private static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}

/* Explanation:
Input:

t: Number of test cases.
For each test case, n: Number of elements in the array and a[]: The array.
Approach:

The goal is to form a permutation of the array such that the greatest GCDs are computed in order.
Sort the array, start with the largest number, and iteratively pick the number that gives the maximum GCD with the current GCD.
Algorithm:

Start with the largest number in the array as the first element in the permutation.
Use a greedy approach to maximize the GCD at each step.
Track visited elements to avoid repetition.
Output:

Print the reordered array for each test case.
This approach ensures an optimal solution using sorting and iterative GCD calculations. The complexity is manageable due to efficient GCD computation.

*/