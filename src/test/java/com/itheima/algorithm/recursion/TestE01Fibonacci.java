package com.itheima.algorithm.recursion;

import org.junit.jupiter.api.Test;

import static com.itheima.algorithm.recursion.E01Fibonacci.*;

public class TestE01Fibonacci {

    @Test
    public void test2() {
        int a = fibonacciBasic(10);
        int b = fibonacciRecursion1(10);
        int c = fibonacciRecursion2(10);
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
