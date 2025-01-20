public class Solution {

    public static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode t1 = l1;
        ListNode t2 = l2;
        ListNode s = new ListNode();
        ListNode temp = s;
        int carry = 0;
        while (t1 != null || t2 != null) {
            int sum = 0 + carry;
            if (t1 != null) {
                sum += t1.val;
                t1 = t1.next;
            }
            if (t2 != null) {
                sum += t2.val;
                t2 = t2.next;
            }
            carry = sum / 10;
            sum = sum % 10;
            temp.next = new ListNode(sum);
            temp = temp.next;
        }
        if (carry == 1) {
            temp.next = new ListNode(carry);
        }
        return s.next;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test case 1: 342 + 465 = 807
        ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // 342
        ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // 465
        ListNode result = solution.addTwoNumbers(l1, l2);
        printList(result); // Expected output: 7 -> 0 -> 8

        // Test case 2: 0 + 0 = 0
        ListNode l3 = new ListNode(0);
        ListNode l4 = new ListNode(0);
        result = solution.addTwoNumbers(l3, l4);
        printList(result); // Expected output: 0

        // Test case 3: 9 + 1 = 10
        ListNode l5 = new ListNode(9);
        ListNode l6 = new ListNode(1);
        result = solution.addTwoNumbers(l5, l6);
        printList(result); // Expected output: 0 -> 1
    }

    // Helper function to print the list
    public static void printList(ListNode node) {
        while (node != null) {
            System.out.print(node.val + " -> ");
            node = node.next;
        }
        System.out.println("NULL");
    }
}
