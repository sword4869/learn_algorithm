[TOC]

## 口算公式

- 记住C0=1

  [1],1,2,5,14,42,132

- 分解公式：$c_j$ 就是以 j 为 根节点，左子树是 $c_{j-1}$，右子树是$ c_{i-j}$

  $\displaystyle C(i) = \sum_{j=1}^{i} C(j-1) \times C(i-j)$

​	

```java
class Solution{
    public int catalan(int n){
        int[] dp = new int[n + 1];
        dp[0] = 1;
        
        // dp[i]的计算要有dp[1..i-1]的历史结果
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                dp[i] += dp[j-1] * dp[i-j];
            }
        }
        return dp[n];
    }
}
```

![image-20240924104253526](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202409241042596.png)



[96. 不同的二叉搜索树.md](..\..\题\leetcode\96. 不同的二叉搜索树.md) : 纯模板 

[95. 不同的二叉搜索树 II.md](..\..\题\leetcode\95. 不同的二叉搜索树 II.md) ：非calatan数

[22. 括号生成.md](..\..\题\leetcode\22. 括号生成.md) : Catalan数的生成模式如何扩展


## 出栈方案
n个元素进栈序列为: 1, 2, 3, 4，... n,则有多少种出栈序列。

- 1：1
- 2：12，21
- 3：123，132，213，321，231

即根dp[i]就是`1`是第几个i出栈，左子树是在1前出栈的元素，右子树是在1后出栈的元素。

## 凸多边形的三角划分

选一条边，再选不是这个边的顶点，连线。

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211816985.png)

## 合法路径

在一个w×h 的网格上，你最开始在(0,0) 上，你每个单位时间可以向上走一格，或者向右走一格，在任意一个时刻，你**往右走的次数都不能少于往上走的次数**，问走到(n,n) 有多少种不同的合法路径。

y=x+1 这条线。所有的合法路径都是不能碰到这条线的，碰到即说明是一条不合法路径。

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211816541.png)

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211816003.png)

路径总数为在2n 次移动中选n次向上移动，即$C^n_{2n}$，不合法路径总数是$C^{n−1}_{2n}$

## 01序列

你现在有n个0和n个1，问有多少个长度为2n的序列，使得序列的任意一个前缀中1的个数都大于等于0的个数。

例如n=2时，有1100,1010两种合法序列，而1001,0101,0110,0011都是不合法的序列

我们把出现一个1看做向右走一格，出现一个0看做向上走一格

## 序列前缀和非负

![alt text](../../../images/image-65.png)

## 不相交弦问题
在一个圆周上分布着 2n个点，两两配对，并在这两个点之间连一条弦，要求所得的2n条弦彼此不相交的配对方案数  

当n=4时，一种合法的配对方案为如图

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211816146.png)

这个问题没有上面的问题那么显然，我们规定一个点为初始点，然后规定一个方向为正方向。如规定最上面那个点为初始点，逆时针方向为正方向。

然后我们把一个匹配第一次遇到的点（称为起点）旁边写一个左括号`(`，一个匹配第二次遇到的点（称为终点）旁边写一个右括号`)` 

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211816826.png)

## 阶梯的矩形划分
一个阶梯可以被若干个矩形拼出来

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211816374.png)