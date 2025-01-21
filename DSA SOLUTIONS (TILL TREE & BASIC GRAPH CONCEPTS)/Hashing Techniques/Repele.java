// Problem: Find the first repeating element in an array
import java.util.HashSet;

public class FirstRepeatingElement {
    public static void main(String[] args) {
        int[] arr = {10, 5, 3, 4, 3, 5, 6};
        HashSet<Integer> set = new HashSet<>();
        int firstRepeating = -1;

        // Traverse the array from the right to find the first repeating element
        for (int i = arr.length - 1; i >= 0; i--) {
            if (set.contains(arr[i])) {
                firstRepeating = arr[i];
            } else {
                set.add(arr[i]);
            }
        }

        if (firstRepeating != -1) {
            System.out.println("First repeating element: " + firstRepeating);
        } else {
            System.out.println("No repeating elements found.");
        }
    }
}
