BFS用栈还是队列? 队列。因为是顺着走，走过就不走了。

DFS用栈还是队列? 栈。因为要模拟回溯的过程。

![](https://pic.leetcode-cn.com/fdcd3bd27f4008948084f6ec86b58535e71f66862bd89a34bd6fe4cc42d68e89.gif)


## BFS



## DFS

变量回溯、集合回溯

```java
void dfs(TreeNode root) {
    if (root == null) {
        return;
    }
    dfs(root.left);
    dfs(root.right);
}
```