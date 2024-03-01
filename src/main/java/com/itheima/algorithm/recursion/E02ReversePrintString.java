package com.itheima.algorithm.recursion;

/**
 * 递归反向打印字符串
 */
public class E02ReversePrintString {

    /*
     * f_1_to_n: n 是从 1 到 n，故而字符是写在递归函数的后面
     */
    public static void f_1_to_n(int n, String str) {
        if (n == str.length()) {
            return;
        }
        f_1_to_n(n + 1, str);
        System.out.println(str.charAt(n));
    }

    /*
     * n_2_1: n 是从 n 到 0，故而字符是写在递归函数的前面
     */
    public static void f_n_2_1(int n, String str) {
        if(n == -1){
            return;
        }
        System.out.println(str.charAt(n));
        f_n_2_1(n -1 ,str);
    }

    public static void main(String[] args) {
        String str = "abcd";
        f_1_to_n(0, str);
        f_n_2_1(str.length() - 1, str);
    }
}
