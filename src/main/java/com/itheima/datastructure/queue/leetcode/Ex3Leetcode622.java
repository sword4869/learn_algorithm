package com.itheima.datastructure.queue.leetcode;

/**
 * 实现队列,基于数组(未考虑正整数越界)
 * 
 * 已重写
 */
class MyCircularQueue {
    int[] arr = null;
    int front;
    int rear;
    int capacity;

    public MyCircularQueue(int k) {
        arr = new int[k];
        capacity = k;
    }

    public boolean enQueue(int value) {
        if (isFull()) {
            return false;
        }
        arr[rear % capacity] = value;
        rear++;
        return true;
    }

    public boolean deQueue() {
        if (isEmpty()) {
            return false;
        }
        front++;
        return true;
    }

    public int Front() {
        if(isEmpty()){
            return -1;
        }
        return arr[front % capacity];
    }

    public int Rear() {
        if(isEmpty()){
            return -1;
        }
        return arr[(rear - 1) % capacity];
    }

    public boolean isEmpty() {
        return rear - front == 0;
    }

    public boolean isFull() {
        return rear - front == capacity;
    }
}