package com.itheima.other;

// 证明浅克隆
public class Mytest {
   public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        test(arr);
   }

   public static void test(Object obj) {
        System.out.println(obj);
   }
}