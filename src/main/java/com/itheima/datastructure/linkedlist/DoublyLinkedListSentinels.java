package com.itheima.datastructure.linkedlist;

import java.util.Iterator;
import java.util.function.Consumer;

/*
 * 两个哨兵的
 */
public class DoublyLinkedListSentinels implements Iterable<Integer>{
    static class Node {
        Node pre;
        int value;
        Node next;

        public Node(Node pre, int value, Node next){
            this.pre = pre;
            this.value = value;
            this.next = next;
        }
    }

    private Node head;
    private Node tail;

    public DoublyLinkedListSentinels(){
        // 放在这里初始化，因为还有next和pre指针的操作
        head = new Node(null, -1, null);
        tail = new Node(null, -1 , null);
        head.next = tail;
        head.pre = tail;
        tail.pre = head;
        tail.next = head;
    }

    /***************************** 查找 ******************************/
    public Node findNode(int index){
        // 也是可以找到哨兵 head, 但不找哨兵 tail
        int i = -1;
        for(Node cur = head; cur != tail; cur = cur.next, i++){
            if (i == index){
                return cur;
            }
        }
        return null;
    }

    public int get(int index){
        Node node = findNode(index);
        if(node == null){
            throw new IllegalArgumentException();
        }
        return node.value;
    }

    /***************************** 添加 ******************************/

    public void addFirst(int value){
        Node added = new Node(head, value, head.next);
        Node next = head.next;
        head.next = added;
        next.pre = added;
    }

    public void addLast(int value){
        Node added = new Node(tail.pre, value, tail);
        Node pre = tail.pre;
        tail.pre = added;
        pre.next = added;
    }

    public void insert(int index, int value){
        Node pre = findNode(index - 1);
        if(pre == null){
            throw new IllegalArgumentException();
        }
        Node added = new Node(pre, value, pre.next);
        Node next = pre.next;
        pre.next = added;
        next.pre = added;
    }

    /**************************** 删除 *******************************/
    public void removeFirst(){
        if (head.next == tail){
            throw new IllegalArgumentException();
        }
        Node first = head.next;
        Node next = first.next;
        head.next = next;
        next.pre = head;
    }

    public void removeLast(){
        if (head.next == tail){
            throw new IllegalArgumentException();
        }
        Node last = tail.pre;
        Node pre = last.pre;
        pre.next = tail;
        tail.pre = pre;
    }

    public void remove(int index){
        Node pre = findNode(index - 1);
        if(pre == null){
            throw new IllegalArgumentException();
        }
        // 如何确定只有首尾两个结点的情况：pre.next == tail
        Node removed = pre.next;
        if(removed == tail){
            throw new IllegalArgumentException();
        }
        Node next = removed.next;
        pre.next = next;
        next.pre = pre;
    }

    /****************** 遍历 ***************************/
    public void loop_while(Consumer<Integer> consumer){
        Node cur = head.next;
        while(cur != tail){
            consumer.accept(cur.value);
            cur = cur.next;
        }
    }

    public void loop_for(Consumer<Integer> consumer){
        for(Node cur = head.next; cur != tail; cur = cur.next){
            consumer.accept(cur.value);
        }
    }

    @Override
    public Iterator<Integer> iterator(){
        return new Iterator<Integer>(){
            Node cur = head.next;
            @Override
            public boolean hasNext(){
                return cur != tail;
            }

            @Override
            public Integer next(){
                int v = cur.value;
                cur = cur.next;
                return v;
            }
        };
    }

}
