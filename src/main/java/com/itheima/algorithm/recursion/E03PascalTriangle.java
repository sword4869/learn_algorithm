package com.itheima.algorithm.recursion;

import java.util.Arrays;

/**
 * 递归杨辉三角(Pascal三角)
 */
public class E03PascalTriangle {

    public static void main(String[] args) {
        print(6);
        printRecursion(6);
        printUpdate(6);
    }

    private static void printSpace(int n, int i) {
        int num = (n - i - 1) * 2;  // 2 是两个空格倍数
        System.out.print(" ".repeat(num));
    }

    public static void print(int n) {
        for (int i = 0; i < n; i++) {
            printSpace(n, i);
            for (int j = 0; j <= i; j++) {
                System.out.printf("%-4d", elementBasic(i, j));
            }
            System.out.println();
        }
    }

    /**
     * <h3>直接递归(未优化)</h3>
     *
     * @param i 行坐标
     * @param j 列坐标
     * @return 该坐标元素值
     */
    private static int elementBasic(int i, int j) {
        if (j == 0 || i == j) {
            return 1;
        }
        return elementBasic(i - 1, j - 1) + elementBasic(i - 1, j);
    }

    public static void printRecursion(int n) {
        int[][] triangle = new int[n][];
        for (int i = 0; i < n; i++) {
            triangle[i] = new int[i + 1];
            Arrays.fill(triangle[i], -1);
            triangle[i][0] = 1;
            triangle[i][i] = 1;
        }
        for (int i = 0; i < n; i++) {
            printSpace(n, i);
            for (int j = 0; j <= i; j++) {
                System.out.printf("%-4d", elementRecursion(i, j, triangle));
            }
            System.out.println();
        }
    }

    private static int elementRecursion(int i, int j, int[][] triangle) {
        if (triangle[i][j] != -1) {
            return triangle[i][j];
        }

        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        return triangle[i][j];
    }


    /**
     * <h3>优化2 非递归 - 使用一维数组记忆法</h3>
     */
    /*
        1   3   3   1
        1   3   3   1   0
        1   3   3   1   1   倒着，初始1
        1   3   3   4   1   a[j] = a[j] + a[j-1]
        1   3   6   4   1
        1   4   6   4   1
     */
    public static void printUpdate(int n) {
        int[] cache = new int[n];
        Arrays.fill(cache, 0);
        for (int i = 0; i < n; i++) {
            printSpace(n, i);
            updateCache(i, cache);
            for (int j = 0; j <= i; j++) {
                System.out.printf("%-4d", cache[j]);
            }
            System.out.println();
        }
    }

    public static void updateCache(int i, int[] cache) {
        if (i == 0) {
            cache[0] = 1;
            return;
        }
        for (int j = i; j > 0; j--) {
            cache[j] = cache[j] + cache[j - 1];
        }
    }
}
