package com.itheima.datastructure.stack;

public class Stack3Leetcode {
    public static void main(String[] args) {
        int[] stack = new int[10];
        int top = 0;    // 下一个元素，栈顶
        
        // push
        stack[top++] = 1;

        // pop
        int e = stack[--top];

        // peek
        int peek = stack[top - 1];

        // isEmpty
        boolean isEmpty = top == 0;

        // isFull
        boolean isFull = top == stack.length;
    }
}
