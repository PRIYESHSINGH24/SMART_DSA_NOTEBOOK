import java.util.Stack;

class Solution {
    public int largestRectangleArea(int[] arr) {
        int n = arr.length;
        Stack<Integer> st = new Stack<>();
        int nse[] = new int[n]; // Nearest Smaller Element to the right
        int pse[] = new int[n]; // Nearest Smaller Element to the left

        // NSE (Nearest Smaller Element to the right)
        st.push(n - 1);
        nse[n - 1] = n;
        for (int i = n - 2; i >= 0; i--) {
            while (st.size() > 0 && arr[st.peek()] >= arr[i]) {
                st.pop();
            }
            if (st.size() == 0) {
                nse[i] = n;
            } else {
                nse[i] = st.peek();
            }
            st.push(i);
        }
        
        while (st.size() > 0) {
            st.pop();
        }

        // PSE (Nearest Smaller Element to the left)
        st.push(0);
        pse[0] = -1;
        for (int i = 1; i < n; i++) {
            while (st.size() > 0 && arr[st.peek()] >= arr[i]) {
                st.pop();
            }
            if (st.size() == 0) {
                pse[i] = -1;
            } else {
                pse[i] = st.peek();
            }
            st.push(i);
        }

        int max = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int area = arr[i] * (nse[i] - pse[i] - 1);
            max = Math.max(max, area);
        }
        return max;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        int[] arr1 = {2, 1, 5, 6, 2, 3};
        System.out.println("Largest Rectangle Area for arr1: " + solution.largestRectangleArea(arr1)); // Output should be 10
        
        int[] arr2 = {1, 2, 3, 4, 5};
        System.out.println("Largest Rectangle Area for arr2: " + solution.largestRectangleArea(arr2)); // Output should be 9
        
        int[] arr3 = {5, 4, 1, 2};
        System.out.println("Largest Rectangle Area for arr3: " + solution.largestRectangleArea(arr3)); // Output should be 8
    }
}
