/*Problem: K-th Smallest Element in BST

Codeforces Problem: K-th Smallest Element in BST (Codeforces 662B)
Topic: Binary Search Tree, In-order Traversal
Problem Description:
Given a binary search tree (BST), you are asked to find the k-th smallest element in the tree.

Solution Approach:
The in-order traversal of a BST gives elements in sorted order.
By performing an in-order traversal, you can efficiently find the k-th smallest element.*/

import java.util.*;

public class KthSmallestInBST {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int x) { val = x; }
    }

    public int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode current = root;
        int count = 0;

        while (true) {
            while (current != null) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            count++;
            if (count == k) {
                return current.val;
            }
            current = current.right;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int k = scanner.nextInt();
        
        // Example BST (can be modified to read tree from input)
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.right.right = new TreeNode(8);

        KthSmallestInBST solution = new KthSmallestInBST();
        int result = solution.kthSmallest(root, k);
        System.out.println(result);

        scanner.close();
    }
}


/*Explanation:
TreeNode Class: Represents a node in the Binary Search Tree.
kthSmallest(): This method performs an in-order traversal using a stack to find the k-th smallest element.
Traverse to the leftmost node.
Keep pushing nodes to the stack until you reach the leftmost node.
Pop nodes one by one and keep counting until you reach k, then return the current node's value.
Example BST: A simple example is manually created in the main() method, but you can modify it to read a tree from input.
Input & Output:
Input: An integer k and a Binary Search Tree.
Output: The k-th smallest element in the BST.*/

