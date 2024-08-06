[TOC]

---
## 阶乘


```java
public class E01Factorial {

    public static int f(int n) {
        if (n == 1) {
            return 1;
        }
        return n * f(n - 1);
    }
    
    public static void main(String[] args) {
        int f = f(5);
        System.out.println(f);
    }
}
```



## sum



```java
public static long sum(long n) {
    if (n == 1) {
        return 1;
    }
    return n + sum(n - 1);
}

public static void main(String[] args) {
    System.out.println(sum(15000));
}
```

## 汉诺塔

[12.4  汉诺塔问题 - Hello 算法 (hello-algo.com)](https://www.hello-algo.com/chapter_divide_and_conquer/hanota_problem/#3)

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211818525.png)

以最后一个盘子为分界：
- 把 n-1 个盘子，由a,借c,移至b
- 把最后的盘子， 由a,借b,移至 c
- 把 n-1 个盘子，由b,借a,移至c



```java
package com.itheima.algorithm.recursion;

import java.util.LinkedList;

/**
 * 递归汉诺塔
 */
public class E02HanoiTower {
    static LinkedList<Integer> a = new LinkedList<>();
    static LinkedList<Integer> b = new LinkedList<>();
    static LinkedList<Integer> c = new LinkedList<>();

    /**
     * <h3>移动圆盘</h3>
     *
     * @param n 圆盘个数
     * @param a 源
     * @param b 辅助
     * @param c 目标
     *  T(n) = 2T(n-1) + c,  O(2^64)
     */
    static void move(int n, LinkedList<Integer> a,
                     LinkedList<Integer> b,
                     LinkedList<Integer> c) {
        if (n == 0) {
            return;
        }
        move(n - 1, a, c, b);   // 把 n-1 个盘子由a,借c,移至b
        c.addLast(a.removeLast()); // 把最后的盘子由 a 移至 c
        move(n - 1, b, a, c);   // 把 n-1 个盘子由b,借a,移至c
    }

    public static void main(String[] args) {
        // n 个盘子
        int n = 5;
        for (int i = 1; i <= n; i++) {
            a.addLast(i);
        }
        print();
        move(n, a, b, c);
        print();
    }

    private static void print() {
        System.out.println("----------------");
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
```

## 杨辉三角

斜着看，行 $i$，列 $j$
```
1
1   1
1   2   1
1   3   3   1
1   4   6   4   1
```

* 递归：
  
    当前元素 = 上一行左上角元素 + 上一行上面元素

    $[i][j] = [i-1][j-1] + [i-1][j]$
* 边界条件：
  
    当面没有元素 $a[i-1][j]$ 不存在————对应斜边  $i=j$ 
    
    或者左上角没有元素 $a[i-1][j-1]$————对应最左一列 $j=0$ 

    当 $j=0$ 或 $i=j$ 时，$[i][j]$ 取值为 $1$




```java
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
```


## 递归反向打印字符串


```java
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
```
