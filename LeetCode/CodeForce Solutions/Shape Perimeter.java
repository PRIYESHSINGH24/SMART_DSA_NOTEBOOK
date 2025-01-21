import java.util.*;
public class Shape_Perimeter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int x = sc.nextInt();
            int y = sc.nextInt();
            n--;
            int ans = m*4;
            while(n-- > 0){
                x = sc.nextInt();
                y = sc.nextInt();
                int peri= (m-x)*2 + (m-y)*2;
                ans += (m*4) - peri;
            }
            System.out.println(ans);
        }
    }
}