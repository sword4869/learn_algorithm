```java
// https://www.luogu.com.cn/problem/P1060
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cap = sc.nextInt();
        int n = sc.nextInt();
        int[] w = new int[n];
        int[] v = new int[n];
        int i = 0;
        while (i < n) {
            w[i] = sc.nextInt();
            v[i] = sc.nextInt();
            i++;
        }
        Solution solution = new Solution();
        int res = solution.pack01(w, v, n, cap);
        System.out.println(res);
    }
}

class Solution {
    public static int knapsackWithPriceRange(int[] weights, int[] prices, int[] values, int capacity) {
        int n = weights.length;
        // Initialize the DP table
        int[][][][] dp = new int[n + 1][capacity + 1][5][5];

        // Fill the DP table
        for (int i = 0; i <= n; i++) {
            for (int c = 0; c <= capacity; c++) {
                for (int pMin = 1; pMin <= 4; pMin++) {
                    for (int pMax = pMin; pMax <= 4; pMax++) {
                        if (i == 0 || c == 0) {
                            dp[i][c][pMin][pMax] = 0;
                        } else {
                            dp[i][c][pMin][pMax] = dp[i - 1][c][pMin][pMax];
                            if (weights[i - 1] <= c && pMax - pMin < 4) {
                                int newPMin = Math.min(prices[i - 1], pMin);
                                int newPMax = Math.max(prices[i - 1], pMax);
                                if (newPMax - newPMin < 4) {
                                    dp[i][c][pMin][pMax] = Math.max(
                                        dp[i][c][pMin][pMax],
                                        dp[i - 1][c - weights[i - 1]][newPMin][newPMax] + values[i - 1]
                                    );
                                }
                            }
                        }
                    }
                }
            }
        }

        // Find the maximum value with price range less than 4
        int maxValue = 0;
        for (int pMin = 1; pMin <= 4; pMin++) {
            for (int pMax = pMin; pMax <= 4; pMax++) {
                if (pMax - pMin < 4) {
                    maxValue = Math.max(maxValue, dp[n][capacity][pMin][pMax]);
                }
            }
        }

        return maxValue;
    }
}
```

