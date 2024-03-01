package com.itheima.algorithm.sort;

import java.util.Arrays;

/**
 * <h3>冒泡排序</h3>
 */
public class BubbleSort {

    public static void bubbleSortBasic(int[] a) {
        for (int i = a.length - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                if (a[j] > a[j + 1]) {
                    int t = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = t;
                }
            }
        }
    }


    public static void bubbleSortX(int[] a) {
        for (int i = a.length - 1; i > 0;) {
            int x = 0;
            for (int j = 0; j < i; j++) {
                if (a[j] > a[j + 1]) {
                    int t = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = t;
                    x = j;
                }
            }
            i = x;
        }
    }

    public static void bubbleSortRecursion(int[] a) {
        recursion(a, a.length - 1);
    }

    private static void recursion(int[] a, int i) {
        // 注意 i == 0 ，不然虽然for循环不走，但 int x =0 ，一直死循环
        if (i <= 0) {
            return;
        }

        int x = 0;
        for (int j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                int t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
                x = j;
            }
        }
        recursion(a, x);
        // recursion(a, i - 1);   // 基础版
    }
}
