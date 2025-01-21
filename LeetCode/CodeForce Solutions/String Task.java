import java.util.*;
public class String_Task {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        StringBuilder sb = new StringBuilder();
        s = s.toLowerCase();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c != 'a' && c != 'o' && c != 'y' && c != 'e' && c != 'u' && c != 'i') {
                sb.append('.').append(c);
            }
        }
        System.out.println(sb);
    }
}
