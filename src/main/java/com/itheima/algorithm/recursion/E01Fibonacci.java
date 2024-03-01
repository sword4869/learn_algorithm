package com.itheima.algorithm.recursion;

import java.util.Arrays;

/**
 * 递归求斐波那契第n项
 */
public class E01Fibonacci {

    public static int fibonacciBasic(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        int x = fibonacciBasic(n - 1);
        int y = fibonacciBasic(n - 2);
        return x + y;
    }

    /**
     * <h3>使用 Memoization(记忆法, 也称备忘录) 改进</h3>
     */
    public static int fibonacci(int n) {
        int[] cache = new int[n + 1];
        Arrays.fill(cache, -1); // [-1,-1,-1,-1,-1,-1]
        cache[0] = 0;
        cache[1] = 1;
        return f(n, cache);
    }

    /*
     * 用递归填满记忆数组
     */
    private static int f(int n, int[] cache) {
        if (cache[n] != -1) {
            return cache[n];
        }

        int x = f(n - 1, cache);
        int y = f(n - 2, cache);
        cache[n] = x + y; // // [0,1,?,-1,-1,-1] 存入数组
        return cache[n];
    }

}
