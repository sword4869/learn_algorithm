package com.itheima;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class b {
    public static void main(String[] args) {
        /* 栈 */
        LinkedList<Integer> stack = new LinkedList<>();
        stack.push(12);
        stack.push(13);
        stack.push(14);
        System.out.println(stack.pop()); // 14
        System.out.println(stack.poll()); // 13
        System.out.println(stack.remove()); // 12

        /* 队列 */
        LinkedList<Integer> queue = new LinkedList<>();
        queue.offer(12);
        queue.add(13);
        System.out.println(queue.pop()); // 12
        // poll^
    }
}
