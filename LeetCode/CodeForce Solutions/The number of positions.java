import java.util.*;
public class The_number_of_positions {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(n - Math.max(a+1,n-b)+1);
    }
}
