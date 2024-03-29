package com.itheima.algorithm.sort;

import java.util.Arrays;

/**
 * 插入排序
 */
public class InsertionSort {
    public static void insertSortBasic(int[] a) {
        // low及其右边的元素是待排序，从第二个元素开始。
        for (int low = 1; low < a.length; low++) {
            int l = a[low];
            int i = low - 1;    // 遍历检查 low 左边的
            // 如果左边大于 a[low]的就右移数组
            while (i >= 0 && a[i] > l) {
                a[i + 1] = a[i];
                i--;    // while对 i >=0 要判断
            }
            // 刚好左边直接不满足，那么就是原位置不插 i+1= low-1+1=low
            if (i != low - 1) {
                a[i + 1] = l;   // 当前是不符合的位置 a[i] <= l，所以插入到下一个位置
            }
        }
    }


}
