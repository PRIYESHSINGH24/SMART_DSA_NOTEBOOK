import java.util.*;

class TreeAncestor {
    private int[][] dp;
    private int maxPower;

    public TreeAncestor(int n, int[] parent) {
        maxPower = (int) (Math.log(n) / Math.log(2)) + 1;
        dp = new int[n][maxPower];
        
        for (int i = 0; i < n; i++) {
            dp[i][0] = parent[i];
        }
        
        for (int j = 1; j < maxPower; j++) {
            for (int i = 0; i < n; i++) {
                int midAncestor = dp[i][j - 1];
                if (midAncestor != -1) {
                    dp[i][j] = dp[midAncestor][j - 1];
                } else {
                    dp[i][j] = -1;
                }
            }
        }
    }

    public int getKthAncestor(int node, int k) {
        for (int j = 0; j < maxPower; j++) {
            if ((k & (1 << j)) > 0) {
                node = dp[node][j];
                if (node == -1) {
                    return -1;
                }
            }
        }
        return node;
    }

    public static void main(String[] args) {
        TreeAncestor treeAncestor = new TreeAncestor(7, new int[]{-1, 0, 0, 1, 1, 2, 2});
        System.out.println(treeAncestor.getKthAncestor(3, 1)); // returns 1
        System.out.println(treeAncestor.getKthAncestor(5, 2)); // returns 0
        System.out.println(treeAncestor.getKthAncestor(6, 3)); // returns -1
    }
}