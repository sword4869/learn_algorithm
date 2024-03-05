package com.itheima.algorithm.recursion;

import java.util.LinkedList;

/**
 * 递归汉诺塔
 */
public class E02HanoiTower {
    static LinkedList<Integer> a = new LinkedList<>();
    static LinkedList<Integer> b = new LinkedList<>();
    static LinkedList<Integer> c = new LinkedList<>();

    /**
     * <h3>移动圆盘</h3>
     *
     * @param n 圆盘个数
     * @param a 源
     * @param b 辅助
     * @param c 目标
     *  T(n) = 2T(n-1) + c,  O(2^64)
     */
    static void move(int n, LinkedList<Integer> a,
                     LinkedList<Integer> b,
                     LinkedList<Integer> c) {
        if (n == 0) {
            return;
        }
        move(n - 1, a, c, b);   // 把 n-1 个盘子由a,借c,移至b
        c.addLast(a.removeLast()); // 把最后的盘子由 a 移至 c
        move(n - 1, b, a, c);   // 把 n-1 个盘子由b,借a,移至c
    }

    public static void main(String[] args) {
        // n 个盘子
        int n = 5;
        for (int i = 1; i <= n; i++) {
            a.addLast(i);
        }
        print();
        move(n, a, b, c);
        print();
    }

    private static void print() {
        System.out.println("----------------");
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
