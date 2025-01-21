/*Segment Tree

Problem: Maximum Subarray Sum (Codeforces 1198C)
Topic: Segment Tree, Dynamic Programming */

import java.util.*;

public class MaximumSubarraySum {
    static class SegmentTree {
        private final int[] tree, arr;
        private final int n;

        public SegmentTree(int[] arr) {
            this.n = arr.length;
            this.arr = arr;
            this.tree = new int[4 * n];
            build(0, 0, n - 1);
        }

        private void build(int node, int start, int end) {
            if (start == end) {
                tree[node] = arr[start];
            } else {
                int mid = (start + end) / 2;
                int leftNode = 2 * node + 1;
                int rightNode = 2 * node + 2;
                build(leftNode, start, mid);
                build(rightNode, mid + 1, end);
                tree[node] = Math.max(tree[leftNode], tree[rightNode]);
            }
        }

        public int query(int l, int r) {
            return query(0, 0, n - 1, l, r);
        }

        private int query(int node, int start, int end, int l, int r) {
            if (r < start || end < l) {
                return Integer.MIN_VALUE;
            }
            if (l <= start && end <= r) {
                return tree[node];
            }
            int mid = (start + end) / 2;
            int leftMax = query(2 * node + 1, start, mid, l, r);
            int rightMax = query(2 * node + 2, mid + 1, end, l, r);
            return Math.max(leftMax, rightMax);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        int q = scanner.nextInt();
        SegmentTree segmentTree = new SegmentTree(arr);

        while (q-- > 0) {
            int l = scanner.nextInt() - 1;
            int r = scanner.nextInt() - 1;
            System.out.println(segmentTree.query(l, r));
        }

        scanner.close();
    }
}


/*
Explanation:
Input:
n: Number of elements in the array.
arr[]: Array of integers.
q: Number of queries.
Each query consists of two integers l and r, specifying the range [l, r].
Segment Tree Implementation:
Build Phase:

The segment tree is built recursively. Each node contains the maximum value of its range.
Time complexity: 
𝑂(𝑛)O(n).
Query Phase:

To find the maximum in a range [l, r], recursively check left and right children and combine their results.
Time complexity per query: 
𝑂(log𝑛)O(logn).
Algorithm Steps:
Parse input and construct the segment tree with the array.
Process each query to find the maximum value in the specified range [l, r] using the query function.
Output the results for all queries.
Output:
For each query, the maximum value in the given range [l, r] is printed.
This solution uses a Segment Tree to handle the queries efficiently and ensures 
𝑂(𝑛+𝑞log𝑛)
O(n+qlogn) time complexity overall.
   */ 