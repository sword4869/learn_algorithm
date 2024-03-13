package com.itheima.datastructure.stack;

import java.util.Iterator;

public class Stack2Array<E> implements Iterable<E> {

    private final E[] array;
    private int top; // 栈顶指针，下一个元素， 栈底 0 1 2 3 4 5 6 7 8 9 栈顶

    @SuppressWarnings("all")
    public Stack2Array(int capacity) {
        this.array = (E[]) new Object[capacity];
    }

    
    public boolean push(E value) {
        if (isFull()) {
            return false;
        }
        array[top++] = value;
        return true;
    }

    
    public E pop() {
        if (isEmpty()) {
            return null;
        }
        E e = array[--top];
        array[top] = null; // help GC
        return e;
    }

    
    public E peek() {
        if (isEmpty()) {
            return null;
        }
        return array[top - 1];
    }

    
    public boolean isEmpty() {
        return top == 0;
    }

    
    public boolean isFull() {
        return top == array.length;
    }

    /*
        底          顶
        0   1   2   3
        a   b   c   d
                        p
     */

    @Override
    public Iterator<E> iterator() {
        return new Iterator<E>() {
            int p = top;

            
            public boolean hasNext() {
                return p > 0;
            }

            
            public E next() {
                return array[--p];
            }
        };
    }
}
