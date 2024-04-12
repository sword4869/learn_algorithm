package com.itheima;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class b {
    public static void main(String[] args) {
        int a = Integer.MAX_VALUE;
        
        // 强制类型转换比+1更优先
        long b = (long)a + 1;
        System.out.println(b);

        long c = a + 1;
        System.out.println(c);
    }

    public int[] test(){
        return new int[3]{1, 2, 3};
    }
}
