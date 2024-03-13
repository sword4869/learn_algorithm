package com.itheima.datastructure.queue;

import java.util.Iterator;

/**
 * head, tail 需要换算成索引值
 * 
 * 
 * @param <E> 队列中元素类型
 */
public class Queue3_ArrayFull<E> implements Iterable<E> {

    private final E[] array;
    int head = 0;
    int tail = 0;

    @SuppressWarnings("all")
    public Queue3_ArrayFull(int c) {
        c -= 1;
        c |= c >> 1;
        c |= c >> 2;
        c |= c >> 4;
        c |= c >> 8;
        c |= c >> 16;
        c += 1;
        array = (E[]) new Object[c];
    }

    public boolean offer(E value) {
        if (isFull()) {
            return false;
        }
        // array[(int) (Integer.toUnsignedLong(tail) % array.length)] = value;
        array[tail & (array.length - 1)] = value;
        tail++;
        return true;
    }

    public E poll() {
        if (isEmpty()) {
            return null;
        }
        int idx = head & (array.length - 1);
        E value = array[idx];
        array[idx] = null; // help GC
        head++;
        return value;
    }

    public E peek() {
        if (isEmpty()) {
            return null;
        }
        return array[head & (array.length - 1)];
    }

    public boolean isEmpty() {
        return head == tail;
    }

    public boolean isFull() {
        return tail - head == array.length;
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
                E value = array[p & (array.length - 1)];
                p++;
                return value;
            }
        };
    }

    public static void main(String[] args) {
        // 验证 tail - head 不会有问题
        System.out.println(Integer.MAX_VALUE);
        // tail 已经自增为负数
        int head = 1_900_000_000;
        int tail = 2_100_000_000;
        for (int i = 0; i < 20; i++) {
            tail += 100_000_000;
            System.out.println(Integer.toUnsignedLong(tail) + " " + Integer.toUnsignedLong(head) + " " + (tail - head));
        }
        // 最后一次显示负数是因为 tail-head 4100000000-1900000000=2200000000 也超过了正整数最大值,而实际这种情况不可能发生(数组最大长度为正整数最大值)

        // tail 和 tail 都成了负数
        System.out.println("===========================");
        head = -2094967296; // 2200000000
        tail = -2094967296; // 2200000000
        for (int i = 0; i < 20; i++) {
            tail += 100_000_000;
            System.out.println(Integer.toUnsignedLong(tail) + " " + Integer.toUnsignedLong(head) + " " + (tail - head));
        }

        // 求离c最近，比c大的 2^n (方法1)
        int c = 32;

        /*
            2^4     = 16
            2^4.?   = 30
            2^5     = 32

              (int)log2(30) + 1
            2

            log2(x) = log10(x) / log10(2)

            1
            10      2^1
            100     2^2
            1000    2^3
         */

        /*int n = (int) (Math.log10(c-1) / Math.log10(2)) + 1;
        System.out.println(n);
        System.out.println(1 << n);*/

        // 求离c最近，比c大的 2^n (方法2)
        c--;
        c |= c >> 1;
        c |= c >> 2;
        c |= c >> 4;
        c |= c >> 8;
        c |= c >> 16;
        c++;
        System.out.println(c);
    }
}
