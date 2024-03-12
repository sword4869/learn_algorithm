```java
class Solution {
    public ListNode getNthFromEnd(ListNode head, int n) {
        ListNode sentinal = new ListNode(-1, head);
        ListNode slow = sentinal;
        ListNode fast = sentinal;
        for(int i = 0 ; i < n; i++){
            fast = fast.next;
        }
        while(fast != null){
            fast = fast.next;
            slow = slow.next;
        }
        return sentinal.next;
    }
}
class Solution {
    public ListNode getNthFromEnd(ListNode head, int n) {
        ListNode slow = head;
        ListNode fast = head;
        for(int i = 0 ; i < n; i++){
            fast = fast.next;
        }
        while(fast != null){
            fast = fast.next;
            slow = slow.next;
        }
        return sentinal.next;
    }
}
```
