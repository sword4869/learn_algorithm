从哨兵开始还是从head开始都一样，因为拉开差距的是for，用了哨兵只是多走一次while.

![](https://pic.leetcode-cn.com/8fc9ef022554d2a062db6a70d5199dbbb2a154ba1e64f0f697319bb0ef9ac680.png)
```java
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
```
