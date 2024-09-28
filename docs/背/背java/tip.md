1. 位运算`&`比取模`%`运算快

    `x%n` → `x&(n-1)`。注意：要求n是2^n。

    `x%2` → `x&1`。`if((2&1) == 0)`

2. `m = (a+b) / 2` → `m = (a + b) >>> 1`：防溢出

    `+-*/%`的优先级高于 `>>`，那么可以写 `m = a + b >>> 1;`

3. 商模

    如果除数是 2 的 n 次方, 那么被除数的后 n 位即为余数 (模)。求被除数的后 n 位方法： 与 2^n-1 按位与
    ```java
    int a = 15;
    int b = 8;  // 除数是 2 的 n 次方
    System.out.println(a / b);
    System.out.println(a >>> 3);
    
    System.out.println(a % b);
    System.out.println(a & (b-1));
    ```

4. int上限

    ```java
    int INF = Integer.MAX_VALUE;      // 2147483647
    int INF = 0x3f3f3f3f;			  // 1061109567
    ```

5. 求大于等于的2^n，比如，7→8，8→8

    ```java
    int x = 8;
    // 方法1：x-1是因为x本身是2的幂时，不需要再加1
    int e = (int)(Math.log10(x - 1)/Math.log10(2)) + 1;
    int result = 1 << e;
    System.out.println(result);
    
    // 方法2：位运算
    x--;
    x |= x >> 1;
    x |= x >> 2;
    x |= x >> 4;
    x |= x >> 8;
    x |= x >> 16;
    x++;
    System.out.println(x);
    ```