【01背包、极差】

[P3985 不开心的金明 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)](https://www.luogu.com.cn/problem/P3985)

[327. 区间和的个数](https://leetcode.cn/problems/count-of-range-sum/)





递归

分解问题，子问题和原问题。

递，是将子问题分解为下一层的子问题。

归，是从边界条件往上一层层传递答案。



处理递归，核心就是千万不要想子问题的过程，马上就绕迷糊了。而要想子问题的结果，思路就清晰了

只要代码的边界条件和非边界条件的逻辑写对了，代码就是正确的，没必要想递归是怎么一层一层走的。





```java

        Solution solution = new Solution();
        char[][] m = {{1,0,1,0,0},{1,0,1,1,1},{1,1,1,1,1},{1,0,0,1,0}};
        System.out.println(solution.maximalSquare(m));


package org.example;

class Solution {
    int[][] dp;
    int m;
    int n;
    int res = 1;
    public int maximalSquare (char[][] matrix) {
        int m = matrix.length;
        if(m == 0){
            return 0;
        }
        int n = matrix[0].length;
        if(n == 0){
            return 0;
        }
        this.m = m;
        this.n = n;

        dp = new int[m+1][n+1];
        for(int i = 1; i <= m; i++){
            for(int j = 1; j <= n; j++){
                dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + matrix[i-1][j-1];
            }
        }

        if(dp[m][n] <= 1){
            return dp[m][n];
        }

        for(int i = 1; i <= m; i++){
            for(int j = 1; j <= n; j++){
                if(matrix[i-1][j-1] == 0) continue;
                dfs(i, j, -1, -1);
                dfs(i, j, 1, 1);
                dfs(i, j, -1, 1);
                dfs(i, j, 1, -1);
            }
        }

        return res;
    }

    public void dfs(int i, int j, int dx, int dy){
        int corner1 = i - dy;
        int corner2 = j - dx;
        if(corner1 < 1 || corner1 > m){
            return;
        }
        if(corner2 < 1 || corner2 > n){
            return;
        }
        int iu = i < corner1 ? i : corner1;
        int id = i > corner1 ? i : corner1;
        int jl = j < corner2 ? j : corner2;
        int jr = j > corner2 ? j : corner2;

        int size = dp[id][jr] - dp[id][jl-1] - dp[iu-1][jr] + dp[iu-1][jl-1];
        int size_real = (Math.abs(dx) + 1) * (Math.abs(dy) + 1);
        if(size != size_real){
            return;
        }
        res = Math.max(res, size);
        dfs(i, j, dx > 0? dx+1: dx-1, dy>0?dy+1:dy-1);
    }
}
public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        char[][] m = {{1,0,1,0,0},{1,0,1,1,1},{1,1,1,1,1},{1,0,0,1,0}};
        System.out.println(solution.maximalSquare(m));
    }
}
```

2331. 计算布尔二叉树的值 https://leetcode.cn/problems/evaluate-boolean-binary-tree/
508. 出现次数最多的子树元素和 https://leetcode.cn/problems/most-frequent-subtree-sum/
1026. 节点与其祖先之间的最大差值 https://leetcode.cn/problems/maximum-difference-between-node-and-ancestor/
1372. 二叉树中的最长交错路径 https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/
1080. 根到叶路径上的不足节点 https://leetcode.cn/problems/insufficient-nodes-in-root-to-leaf-paths/
