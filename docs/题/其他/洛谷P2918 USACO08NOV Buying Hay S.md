至少 *H* 磅干草的最小的开销

## 价格下的最多干草 + 遍历

价格下的最多干草 dp[i]：表示价格为i时的最多干草

​	背包占位是干草的价格

​	价值是干草重量

遍历：

​	遍历价格，找到第一个满足干草重量的价格

```java
// https://www.luogu.com.cn/problem/P2918
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), cap = sc.nextInt();
        int[] w = new int[n];
        int[] v = new int[n];
        int i = 0;
        while (i < n) {
            v[i] = sc.nextInt();    // 价值是干草重量
            w[i] = sc.nextInt();    // 背包占位是干草重量价格
            i++;
        }
        Solution solution = new Solution();
        int res = solution.packInfinity(w, v, n, cap);
        System.out.println(res);
    }
}

class Solution {
    public int packInfinity(int[] w, int[] v, int n, int cap) {
        // dp[i] 表示价格为i时的最多干草
        int m = 250000;
        int[] dp = new int[m + 1];
        for (int i = 1; i <= n; i++) {
            for (int c = w[i-1]; c <= m; c++) {
                dp[c] = Math.max(dp[c], dp[c - w[i-1]] + v[i-1]);
            }
        }
        // 遍历价格，找到第一个满足干草重量的价格
        for(int i = 1; i <=m; i++){
            if(dp[i] >= cap){
                return i;
            }
        }
        return 0;
    }
}
```

## 重量为i的最小价格→买**至少**重量为i的最小价格

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), cap = sc.nextInt();
        int[] w = new int[n];
        int[] v = new int[n];
        int i = 0;
        while (i < n) {
            w[i] = sc.nextInt(); // 干草重量
            v[i] = sc.nextInt(); // 干草重量价格
            i++;
        }
        Solution solution = new Solution();
        int res = solution.packInfinity(w, v, n, cap);
        System.out.println(res);
    }
}

class Solution {
    public int packInfinity(int[] w, int[] v, int n, int cap) {
        int[] dp = new int[cap + 1];
        // 最小价格：初始就得最大值
        Arrays.fill(dp, 0x3f3f3f3f);
        for (int i = 1; i <= n; i++) {
            for (int c = 1; c <= cap; c++) {
                // dp[0] 初始化是最大值，所以不能像以往一样放到if里，否则 dp[c - w[i - 1]] + v[i - 1] = MAX_VALUE + v[i - 1] 永远大于 dp[c]
                if (c > w[i - 1]) {
                    dp[c] = Math.min(dp[c], dp[c - w[i - 1]] + v[i - 1]);
                } else {
                    dp[c] = Math.min(dp[c], v[i - 1]);
                }
            }
        }
        return dp[cap];
    }
}
```

