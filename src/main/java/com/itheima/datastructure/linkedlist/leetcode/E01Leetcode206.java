package com.itheima.datastructure.linkedlist.leetcode;

import com.itheima.datastructure.linkedlist.ListNode;

/**
 * 反转链表
 */
public class E01Leetcode206 {
    // pre cur官方题解
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode cur = head;
        while (cur != null) {
            ListNode next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    // 方法1: 创建新链表
    public ListNode reverseList1(ListNode o1) {
        ListNode n1 = null;
        ListNode p = o1;
        while (p != null) {
            n1 = new ListNode(p.val, n1);
            p = p.next;
        }
        return n1;
    }

    // 方法3 - 递归
    public ListNode reverseList3(ListNode p) {
        if (p == null || p.next == null) {
            return p; // 最后节点
        }
        ListNode last = reverseList3(p.next);
        last.next = p;
        p.next = null;
        return last;
    }

    public static void main(String[] args) {
        ListNode o5 = new ListNode(5, null);
        ListNode o4 = new ListNode(4, o5);
        ListNode o3 = new ListNode(3, o4);
        ListNode o2 = new ListNode(2, o3);
        ListNode o1 = new ListNode(1, o2);
        System.out.println(o1);
        ListNode n1 = new E01Leetcode206().reverseList1(o1);
        System.out.println(n1);
    }
}
