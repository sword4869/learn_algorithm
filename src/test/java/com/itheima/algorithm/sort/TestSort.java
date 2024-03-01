package com.itheima.algorithm.sort;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.function.Consumer;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

public class TestSort {

    private void test_sort(Consumer<int[]> consumer){
        int[] expected = {1, 2, 3, 4, 5};

        int[] a1 = {5, 4, 3, 2, 1};
        consumer.accept(a1);
        assertArrayEquals(expected, a1);

        int[] a2 = {4, 5, 3, 2, 1};
        consumer.accept(a2);
        assertArrayEquals(expected, a2);


        int[] a3 = {1, 2, 3, 4, 5};
        consumer.accept(a3);
        assertArrayEquals(expected, a3);

        int[] a4 = {3, 1, 4, 2, 5};
        consumer.accept(a4);
        assertArrayEquals(expected, a4);
    }
    @Test
    @DisplayName("冒泡排序")
    public void test_bubble(){
        test_sort(BubbleSort::bubbleSortBasic);
        test_sort(BubbleSort::bubbleSortX);
        test_sort(BubbleSort::bubbleSortRecursion);
    }

    @Test
    @DisplayName("插入排序")
    public void test_insert(){
        test_sort(InsertionSort::insertSortBasic);
        test_sort(InsertionSort::insertSortSwap);
        test_sort(InsertionSort::insertSortRecursion);
    }
}
