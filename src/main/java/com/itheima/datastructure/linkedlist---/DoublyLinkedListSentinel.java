package com.itheima.datastructure.linkedlist;

import java.util.Iterator;
import java.util.function.Consumer;

/*
 * 两个哨兵的
 */
public class DoublyLinkedListSentinel implements Iterable<Integer>{
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

    private Node sentinel;

    public DoublyLinkedListSentinel(){
        // sentinel指向自身
        sentinel = new Node(null, -1, null);
        sentinel.next = sentinel;
        sentinel.pre = sentinel;
    }

    /***************************** 查找 ******************************/
    public Node findNode(int index){
        if(index == -1){
            return sentinel;
        }

        // 不可以直接写找到哨兵, 因为那就成了 Node cur = sentinel; cur != sentinel 直接退出
        int i = 0;
        for(Node cur = sentinel.next; cur != sentinel; cur = cur.next, i++){
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
        Node added = new Node(sentinel, value, sentinel.next);
        Node next = sentinel.next;
        sentinel.next = added;
        next.pre = added;
    }

    public void addLast(int value){
        Node added = new Node(sentinel.pre, value, sentinel);
        Node pre = sentinel.pre;
        sentinel.pre = added;
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
        if (sentinel.next == sentinel){
            throw new IllegalArgumentException();
        }
        Node first = sentinel.next;
        Node next = first.next;
        sentinel.next = next;
        next.pre = sentinel;
    }

    public void removeLast(){
        if (sentinel.next == sentinel){
            throw new IllegalArgumentException();
        }
        Node last = sentinel.pre;
        Node pre = last.pre;
        pre.next = sentinel;
        sentinel.pre = pre;
    }

    public void remove(int index){
        Node pre = findNode(index - 1);
        if(pre == null){
            throw new IllegalArgumentException();
        }
        // 如何确定只有一个结点的情况：pre.next == sentinel
        Node removed = pre.next;
        if(removed == sentinel){
            throw new IllegalArgumentException();
        }
        Node next = removed.next;
        pre.next = next;
        next.pre = pre;
    }

    /****************** 遍历 ***************************/
    public void loop_while(Consumer<Integer> consumer){
        Node cur = sentinel.next;
        while(cur != sentinel){
            consumer.accept(cur.value);
            cur = cur.next;
        }
    }

    public void loop_for(Consumer<Integer> consumer){
        for(Node cur = sentinel.next; cur != sentinel; cur = cur.next){
            consumer.accept(cur.value);
        }
    }

    @Override
    public Iterator<Integer> iterator(){
        return new Iterator<Integer>(){
            Node cur = sentinel.next;
            @Override
            public boolean hasNext(){
                return cur != sentinel;
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
