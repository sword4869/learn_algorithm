package com.itheima.datastructure.linkedlist;

import java.util.Iterator;
import java.util.function.Consumer;

/**
 * 单向链表
 */
public class SinglyLinkedList implements Iterable<Integer> {
    private Node head; // 头指针

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
    private Node findLast() {
        // 空链表处理，因为要判断 next 属性
        if (head == null) {
            return null;
        }

        // 最后一个元素，其 next 为 null
        Node p = null;
        for (p = head; p.next != null; p = p.next) {

        }
        return p;
    }

    private Node findNode(int index) {
        // 没找到返回null
        int i = 0;
        for(Node p = head; p != null; p = p.next, i++){
            if(i == index){
                return p;
            }
        }
        return null;
    }

    /**
     * 根据索引查找
     *
     * @param index 索引
     * @return 找到, 返回该索引位置节点的值
     * @throws IllegalArgumentException 找不到, 抛出 index 非法异常
     */
    public int get(int index) {
        Node node = findNode(index);
        if (node == null) {
            throw new IllegalArgumentException();
        }
        return node.value;
    }

    /************************ 添加 ************************/
    public void addFirst(int value) {
        // 1. 链表为空, head 也是 null
        // head = new Node(value, null);
        // 2. 链表非空
        head = new Node(value, head);
    }

    public void addLast(int value) {
        Node last = findLast();
        // 空链表
        if(last == null){
            head = new Node(value, null);
            return;
        }
        last.next = new Node(value, null);
    }

    public void insert(int index, int value) throws IllegalArgumentException {
        // 因为要特别处理上一个节点的index为-1的情况
        if (index == 0) {
            head = new Node(value, head);
            return;
        }
        Node prev = findNode(index - 1); // 找到上一个节点
        if (prev == null) { // 找不到
            throw new IllegalArgumentException();
        }
        Node added = new Node(value, prev.next);
        prev.next = added;
    }

    /************************ 删除 ************************/
    public void removeFirst() throws IllegalArgumentException {
        if (head == null) {
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
        // index异常
        if (removed == null) {
            throw new IllegalArgumentException();
        }
        prev.next = removed.next;
    }

    /************************ 遍历 ************************/
    public void loop_while(Consumer<Integer> consumer) {
        Node p = head;
        while (p != null) {
            consumer.accept(p.value);
            p = p.next;
        }
    }

    public void loop_for(Consumer<Integer> consumer) {
        for (Node p = head; p != null; p = p.next) {
            consumer.accept(p.value);
        }
    }

    public void loop_recursion(Consumer<Integer> before, Consumer<Integer> after) {
        recursion(head, before, after);
    }

    private void recursion(Node cur, Consumer<Integer> before, Consumer<Integer> after) {
        if (cur == null) {
            return;
        }

        before.accept(cur.value);
        recursion(cur.next, before, after);
        after.accept(cur.value);
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<Integer>() {
            Node p = head;

            @Override
            public boolean hasNext() { // 是否有下一个元素
                return p != null;
            }

            @Override
            public Integer next() { // 返回当前值, 并指向下一个元素
                int v = p.value;
                p = p.next;
                return v;
            }
        };
    }
}