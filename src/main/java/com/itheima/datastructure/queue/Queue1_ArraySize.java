package com.itheima.datastructure.queue;

import java.util.Iterator;

/**
 * 用 size 辅助判断空满
 *
 * @param <E> 队列中元素类型
 */
public class Queue1_ArraySize<E> implements Iterable<E> {

    private final E[] array;
    private int head = 0;
    private int tail = 0;
    private int size = 0; // 元素个数

    @SuppressWarnings("all")
    public Queue1_ArraySize(int capacity) {
        array = (E[]) new Object[capacity];
    }
    /**
     * 向队列尾插入值. 有的习惯命名为 enqueue
     *
     * @param value 待插入值
     * @return 插入成功返回 true, 插入失败返回 false
     */
    public boolean offer(E value) {
        if (isFull()) {
            return false;
        }
        array[tail] = value;
        tail = (tail + 1) % array.length;
        size++;
        return true;
    }
    /**
     * 从对列头获取值, 并移除. 有的习惯命名为 dequeue
     *
     * @return 如果队列非空返回对头值, 否则返回 null
     */
    public E poll() {
        if (isEmpty()) {
            return null;
        }
        E value = array[head];
        array[head] = null; // help GC
        head = (head + 1) % array.length;
        size--;
        return value;
    }
    /**
     * 从对列头获取值, 不移除
     *
     * @return 如果队列非空返回对头值, 否则返回 null
     */
    public E peek() {
        if (isEmpty()) {
            return null;
        }
        return array[head];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == array.length;
    }

    public int getSize() {
        return size;
    }

    public E getIndex(int i) {
        return array[(head + i) % array.length];
    }

    @Override
    public Iterator<E> iterator() {
        return new Iterator<E>() {
            int p = head;
            int count = 0;

            @Override
            public boolean hasNext() {
                return count < size;
            }

            @Override
            public E next() {
                E value = array[p];
                p = (p + 1) % array.length;
                count++;
                return value;
            }
        };
    }
}
