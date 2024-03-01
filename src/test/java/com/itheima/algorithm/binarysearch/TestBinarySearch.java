package com.itheima.algorithm.binarysearch;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static com.itheima.algorithm.binarysearch.BinarySearch.*;
import static org.junit.jupiter.api.Assertions.*;

public class TestBinarySearch {

    @Test
    @DisplayName("测试 binarySearchBasic")
    public void test1() {
        int[] a = {7, 13, 21, 30, 38, 44, 52, 53};
        assertEquals(0, binarySearchBasic(a, 7));
        assertEquals(1, binarySearchBasic(a, 13));
        assertEquals(2, binarySearchBasic(a, 21));
        assertEquals(3, binarySearchBasic(a, 30));
        assertEquals(4, binarySearchBasic(a, 38));
        assertEquals(5, binarySearchBasic(a, 44));
        assertEquals(6, binarySearchBasic(a, 52));
        assertEquals(7, binarySearchBasic(a, 53));

        assertEquals(-1, binarySearchBasic(a, 0));
        assertEquals(-1, binarySearchBasic(a, 15));
        assertEquals(-1, binarySearchBasic(a, 60));
    }

    @Test
    @DisplayName("测试 binarySearchAlternative ")
    public void test3() {
        int[] a = {7, 13, 21, 30, 38, 44, 52, 53};
        assertEquals(0, binarySearchAlternative(a, 7));
        assertEquals(1, binarySearchAlternative(a, 13));
        assertEquals(2, binarySearchAlternative(a, 21));
        assertEquals(3, binarySearchAlternative(a, 30));
        assertEquals(4, binarySearchAlternative(a, 38));
        assertEquals(5, binarySearchAlternative(a, 44));
        assertEquals(6, binarySearchAlternative(a, 52));
        assertEquals(7, binarySearchAlternative(a, 53));

        assertEquals(-1, binarySearchAlternative(a, 0));
        assertEquals(-1, binarySearchAlternative(a, 15));
        assertEquals(-1, binarySearchAlternative(a, 60));
    }

    @Test
    @DisplayName("测试 binarySearchBalance")
    public void test4() {
        int[] a = {7, 13, 21, 30, 38, 44, 52, 53};
        assertEquals(0, binarySearchBalance(a, 7));
        assertEquals(1, binarySearchBalance(a, 13));
        assertEquals(2, binarySearchBalance(a, 21));
        assertEquals(3, binarySearchBalance(a, 30));
        assertEquals(4, binarySearchBalance(a, 38));
        assertEquals(5, binarySearchBalance(a, 44));
        assertEquals(6, binarySearchBalance(a, 52));
        assertEquals(7, binarySearchBalance(a, 53));

        assertEquals(-1, binarySearchBalance(a, 0));
        assertEquals(-1, binarySearchBalance(a, 15));
        assertEquals(-1, binarySearchBalance(a, 60));
    }

    @Test
    @DisplayName("测试 binarySearch java 版")
    public void test5() {
        /*
                ⬇
            [2, 5, 8]       a
            [2, 0, 0, 0]    b
            [2, 4, 0, 0]    b
            [2, 4, 5, 8]    b
         */
        int[] a = {2, 5, 8};
        int target = 4;
        int i = Arrays.binarySearch(a, target);
        assertTrue(i < 0);
        // i = -插入点 - 1  因此有 插入点 = abs(i+1)
        int insertIndex = Math.abs(i + 1); // 插入点索引
        int[] b = new int[a.length + 1];
        System.arraycopy(a, 0, b, 0, insertIndex);
        b[insertIndex] = target;
        System.arraycopy(a, insertIndex, b, insertIndex + 1, a.length - insertIndex);
        assertArrayEquals(new int[]{2, 4, 5, 8}, b);
    }


    @Test
    @DisplayName("测试 binarySearchLeftmost 返回 -1")
    public void test6() {
        int[] a = {1, 2, 4, 4, 4, 5, 6, 7};
        assertEquals(0, binarySearchLeftmost(a, 1));
        assertEquals(1, binarySearchLeftmost(a, 2));
        assertEquals(2, binarySearchLeftmost(a, 4));
        assertEquals(5, binarySearchLeftmost(a, 5));
        assertEquals(6, binarySearchLeftmost(a, 6));
        assertEquals(7, binarySearchLeftmost(a, 7));

        assertEquals(-1, binarySearchLeftmost(a, 0));
        assertEquals(-1, binarySearchLeftmost(a, 3));
        assertEquals(-1, binarySearchLeftmost(a, 8));
    }

    @Test
    @DisplayName("测试 binarySearchRightmost 返回 -1")
    public void test7() {
        int[] a = {1, 2, 4, 4, 4, 5, 6, 7};
        assertEquals(0, binarySearchRightmost(a, 1));
        assertEquals(1, binarySearchRightmost(a, 2));
        assertEquals(4, binarySearchRightmost(a, 4));
        assertEquals(5, binarySearchRightmost(a, 5));
        assertEquals(6, binarySearchRightmost(a, 6));
        assertEquals(7, binarySearchRightmost(a, 7));

        assertEquals(-1, binarySearchRightmost(a, 0));
        assertEquals(-1, binarySearchRightmost(a, 3));
        assertEquals(-1, binarySearchRightmost(a, 8));
    }

    @Test
    @DisplayName("测试 binarySearchLeftmost 返回 i")
    public void test8() {
        int[] a = {1, 2, 4, 4, 4, 7, 8};
        assertEquals(0, binarySearchLeftmostUseful(a, 1));
        assertEquals(1, binarySearchLeftmostUseful(a, 2));
        assertEquals(2, binarySearchLeftmostUseful(a, 4));
        assertEquals(5, binarySearchLeftmostUseful(a, 7));
        assertEquals(6, binarySearchLeftmostUseful(a, 8));

        assertEquals(0, binarySearchLeftmostUseful(a, 0));
        assertEquals(2, binarySearchLeftmostUseful(a, 3));
        assertEquals(5, binarySearchLeftmostUseful(a, 5));
        assertEquals(7, binarySearchLeftmostUseful(a, 9));
    }

    @Test
    @DisplayName("测试 binarySearchRightmost 返回 i-1")
    public void test9() {
        int[] a = {1, 2, 4, 4, 4, 5, 6, 7};
        assertEquals(0, binarySearchRightmostUseful(a, 1));
        assertEquals(1, binarySearchRightmostUseful(a, 2));
        assertEquals(4, binarySearchRightmostUseful(a, 4));
        assertEquals(5, binarySearchRightmostUseful(a, 5));
        assertEquals(6, binarySearchRightmostUseful(a, 6));
        assertEquals(7, binarySearchRightmostUseful(a, 7));

        assertEquals(0, binarySearchRightmostUseful(a, 0) + 1);
        assertEquals(2, binarySearchRightmostUseful(a, 3) + 1);
        assertEquals(8, binarySearchRightmostUseful(a, 8) + 1);
    }

    @Test
    @DisplayName("测试递归二分查找")
    public void test10() {
        int[] a = {7, 13, 21, 30, 38, 44, 52, 53};
        assertEquals(0, binarySearchRecursion(a, 7));
        assertEquals(1, binarySearchRecursion(a, 13));
        assertEquals(2, binarySearchRecursion(a, 21));
        assertEquals(3, binarySearchRecursion(a, 30));
        assertEquals(4, binarySearchRecursion(a, 38));
        assertEquals(5, binarySearchRecursion(a, 44));
        assertEquals(6, binarySearchRecursion(a, 52));
        assertEquals(7, binarySearchRecursion(a, 53));

        assertEquals(-1, binarySearchRecursion(a, 0));
        assertEquals(-1, binarySearchRecursion(a, 15));
        assertEquals(-1, binarySearchRecursion(a, 60));
    }
}
