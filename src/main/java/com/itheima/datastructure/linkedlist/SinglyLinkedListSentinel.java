package com.itheima.datastructure.linkedlist;

import java.util.Iterator;
import java.util.function.Consumer;

/**
 * 单向链表(带哨兵)
 */

import java.util.Iterator;
import java.util.function.Consumer;

public class SinglyLinkedListSentinel implements Iterable<Integer> {
    private Node head = new Node(-1, null); // Sentinel

    /**
     * 节点类
     */
    private static class Node {
        int value; // 值
        Node next; // 下一个节点指针

        public Node(int value, Node next) {
            this.value = value;
            this.next = next;
        }
    }

    /************************ 查找 ************************/
    public Node findLast() {
        // >>>>>>>>>>>  就算没有其它节点，也会返回哨兵作为最后一个节点
        Node p;
        // 最后一个元素，其 next 为 null
        for (p = head; p.next != null; p = p.next) {

        }
        return p;
    }

    public Node findNode(int index) {
        // >>>>>>>>>>> 加入了哨兵，从-1开始；而且-1也可以找到哨兵
        int i = -1;
        for(Node p = head; p != null; p = p.next, i++){
            if(i == index){
                return p;
            }
        }
        return null;
    }

    public int get(int index) {
        Node node = findNode(index);
        if (node == null) {
            throw new IllegalArgumentException();
        }
        return node.value;
    }

    /************************ 添加 ************************/
    public void addFirst(int value) {
        // 1. 链表为空, head.next 也是 null
        // head.next = new Node(value, null);
        // 2. 链表非空
        head.next = new Node(value, head.next);
    }

    public void addLast(int value) {
        Node last = findLast();
        last.next = new Node(value, null);
    }

    public void insert(int index, int value) throws IllegalArgumentException {
        // 不需要要特别处理上一个节点的index为-1的情况，因为其有哨兵结点。
        // 1. 先查找结点：index-1
        // 2. 再添加结点
        Node prev = findNode(index - 1); // 找到上一个节点
        if (prev == null) { // 找不到
            throw new IllegalArgumentException();
        }
        prev.next = new Node(value, prev.next);
    }

    /************************ 删除 ************************/
    public void removeFirst() throws IllegalArgumentException {
        if (head.next == null) {
            throw new IllegalArgumentException();
        }
        head = head.next;
    }

    public void remove(int index) throws IllegalArgumentException {
        // 因为要特别处理上一个节点的index为-1的情况
        if (index == 0) {
            removeFirst();
            return;
        }

        Node prev = findNode(index - 1); // 上一个节点
        // index异常
        if (prev == null) {
            throw new IllegalArgumentException();
        }
        Node removed = prev.next; // 被删除的节点
        // prev已经是最后一个节点，那么index异常
        if (removed == null) {
            throw new IllegalArgumentException();
        }
        prev.next = removed.next;
    }

    /************************ 遍历 ************************/
    public void loop_while(Consumer<Integer> consumer) {
        Node p = head.next;
        while (p != null) {
            consumer.accept(p.value);
            p = p.next;
        }
    }

    public void loop_for(Consumer<Integer> consumer) {
        for (Node p = head.next; p != null; p = p.next) {
            consumer.accept(p.value);
        }
    }

    public void loop_recursion(Consumer<Integer> before, Consumer<Integer> after) {
        recursion(head.next, before, after);
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<Integer>() {
            // >>>>>>>>> 注意从哨兵后面开始
            Node cur = head.next;

            @Override
            public boolean hasNext() { // 是否有下一个元素
                return cur != null;
            }

            @Override
            public Integer next() { // 返回当前值, 并指向下一个元素
                int v = cur.value;
                cur = cur.next;
                return v;
            }
        };
    }

    /************************ 递归 ************************/
    private void recursion(Node cur, Consumer<Integer> before, Consumer<Integer> after) {
        if (cur == null) {
            return;
        }

        before.accept(cur.value);
        recursion(cur.next, before, after);
        after.accept(cur.value);
    }
}