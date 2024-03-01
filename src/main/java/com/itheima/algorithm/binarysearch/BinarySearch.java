package com.itheima.algorithm.binarysearch;

public class BinarySearch {
    /**
     * <h3>二分查找基础版</h3>
     * @return <p>找到则返回索引</p>
     * <p>找不到返回 -1</p>
     */
    public static int binarySearchBasic(int[] a, int target) {
        int i = 0, j = a.length - 1;    // 设置指针和初值
        // L 次  元素在最左边 L 次，  元素在最右边 2*L 次
        while (i <= j) {                // i~j 范围内有东西
            int m = (i + j) >>> 1;
            if (target < a[m]) {         // 目标在左边
                j = m - 1;
            } else if (a[m] < target) { // 目标在右边
                i = m + 1;
            } else {                    // 找到了
                return m;
            }
        }
        return -1;
        // 返回将会被按顺序插入的位置。
        //      return i;         直接写法
        //      return -(i + 1);  java底层写法
    }

    /**
     * <h3>二分查找改动版</h3>
     * @return <p>找到则返回索引</p>
     * <p>找不到返回 -1</p>
     */
    public static int binarySearchAlternative(int[] a, int target) {
        int i = 0, j = a.length;     // 第一处
        while (i < j) {              // 第二处
            int m = (i + j) >>> 1;
            if (target < a[m]) {
                j = m;               // 第三处
            } else if (a[m] < target) {
                i = m + 1;
            } else {
                return m;
            }
        }
        return -1;
    }

    /**
     * <h3>二分查找平衡版</h3>
     * @return <p>找到则返回索引</p>
     * <p>找不到返回 -1</p>
     */
    public static int binarySearchBalance(int[] a, int target) {
        int i = 0, j = a.length;
        while (1 < j - i) {         // 范围内待查找的元素个数 > 1 时
            int m = (i + j) >>> 1;
            if (target < a[m]) {    // 目标在左边
                j = m;
            } else {                // 目标在 m 或右边
                i = m;
            }
        }
        if (a[i] == target){
            return i;
        } else {
            return -1;
        }
    }


    /**
     * <h3>二分查找 Leftmost </h3>
     * @return <p>找到则返回最靠左索引</p>
     * <p>找不到返回 -1</p>
     */
    public static int binarySearchLeftmost(int[] a, int target) {
        int i = 0, j = a.length - 1;
        int candidate = -1;
        while (i <= j) {
            int m = (i + j) >>> 1;
            if (target < a[m]) {
                j = m - 1;
            } else if (a[m] < target) {
                i = m + 1;
            } else {
                candidate = m; // 记录候选位置
                j = m - 1;     // 继续向左
            }
        }
        return candidate;
    }


    /**
     * <h3>二分查找 Rightmost </h3>
     * @return <p>找到则返回最靠右索引</p>
     * <p>找不到返回 -1</p>
     */
    public static int binarySearchRightmost(int[] a, int target) {
        int i = 0, j = a.length - 1;
        int candidate = -1;
        while (i <= j) {
            int m = (i + j) >>> 1;
            if (target < a[m]) {
                j = m - 1;
            } else if (a[m] < target) {
                i = m + 1;
            } else {
                candidate = m; // 记录候选位置
                i = m + 1;	   // 继续向右
            }
        }
        return candidate;
    }

    /**
     * <h3>二分查找 Leftmost有用版 </h3>
     * @return <p>找到大于等于目标的最左元素的索引</p>
     */
    public static int binarySearchLeftmostUseful(int[] a, int target) {
        int i = 0, j = a.length - 1;
        while (i <= j) {
            int m = (i + j) >>> 1;
            if (target <= a[m]) {
                j = m - 1;
            } else {
                i = m + 1;
            }
        }
        return i;
    }

    /**
     * <h3>二分查找 Rightmost有用版 </h3>
     * @return <p>找到小于等于目标的最右元素的索引</p>
     */
    public static int binarySearchRightmostUseful(int[] a, int target) {
        int i = 0, j = a.length - 1;
        while (i <= j) {
            int m = (i + j) >>> 1;
            if (target < a[m]) {
                j = m - 1;
            } else {
                i = m + 1;
            }
        }
        return i - 1;
    }

    /**
     * <h3>二分查找 递归版 </h3>
     * @return <p>找到则返回索引</p>
     * <p>找不到返回 -1</p>
     */
    public static int binarySearchRecursion(int[] a, int target){
        return recursion(a, target, 0, a.length - 1);
    }

    public static int recursion(int[] a, int target, int i, int j){
        if(i > j){
            return -1;
            // return i;
        }

        int m = (i + j) >>> 1;

        if (target < a[m]){
            return recursion(a, target, i, m - 1);
        }else if(a[m] < target){
            return recursion(a, target, m + 1, j);
        }else{
            return m;
        }
    }
}
