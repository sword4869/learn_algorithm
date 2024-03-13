package com.itheima.datastructure.queue;

import java.util.Iterator;

/**
 * head有元素，tail没元素。索引值
 * 
 * tail 指向下一个插入位置
 *
 * @param <E> 队列中元素类型
 */
public class Queue2_ArrayRemaining<E> implements Iterable<E> {

    private final E[] array;
    private int head = 0;
    private int tail = 0;

    @SuppressWarnings("all")
    public Queue2_ArrayRemaining(int capacity) {
        array = (E[]) new Object[capacity + 1];
    }

    public boolean offer(E value) {
        if (isFull()) {
            return false;
        }
        array[tail] = value;
        tail = (tail + 1) % array.length;
        return true;
    }
    
    public E poll() {
        if (isEmpty()) {
            return null;
        }
        E value = array[head];
        array[head] = null; // help GC
        head = (head + 1) % array.length;
        return value;
    }

    public E peek() {
        if (isEmpty()) {
            return null;
        }
        return array[head];
    }

    public boolean isEmpty() {
        return head == tail;
    }

    public boolean isFull() {
        return (tail + 1) % array.length == head;
    }
    
    public int getSize(){
        return (tail - head + array.length) % array.length;
    }

    public E getIndex(int i){
        return array[(head + i) % array.length];
    }

    @Override
    public Iterator<E> iterator() {
        return new Iterator<E>() {
            int p = head;

            @Override
            public boolean hasNext() {
                return p != tail;
            }

            @Override
            public E next() {
                E value = array[p];
                p = (p + 1) % array.length;
                return value;
            }
        };
    }
}