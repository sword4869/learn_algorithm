现给定任意正整数 n，请寻找并输出最小的正整数 m（m>9），使得 m 的各位（个位、十位、百位 ... ...）之乘积等于n，若不存在则输出 -1。                                        

示例1

```
输入 36
输出 49
```
示例2

```
输入 100
输出 455
```

分解因子，且因子都是一位数（小于10）

因为要求最小，49和94都符合标准的话优先49，所以从9到2开始看是否能整除

比如17不能分解，那么就是 n > 1。能分解的结果都是 n = 1

此外，9 4 1 组合成 1 4 9的方法，res = res + i * pow。

```java
import java.util.*;


public class Solution {
    public int solution (int n) {
        int res = 0;
        int pow = 1;
        for (int i = 9; i >= 2; i--) {
            while (n % i == 0) {
                n /= i;
                res = i * pow + res;
                pow *= 10;
            }
        }
        if (n > 1) {
            return -1;
        } else {
            return res;
        }
    }
}
```

