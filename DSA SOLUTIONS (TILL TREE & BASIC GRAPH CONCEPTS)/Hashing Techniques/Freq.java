// Problem: Count the frequencies of elements in an array
import java.util.HashMap;

public class FrequencyCount {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 3, 4, 5};
        HashMap<Integer, Integer> frequencyMap = new HashMap<>();

        // Count frequencies using a HashMap
        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        // Print the frequencies
        for (int key : frequencyMap.keySet()) {
            System.out.println("Element: " + key + ", Frequency: " + frequencyMap.get(key));
        }
    }
}
