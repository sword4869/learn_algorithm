## 回溯

模板：void dfs

- 用栈保存符合的链路结果。
- 保存结果处、剪枝处、正向操作-递归-反向操作处。

### dfs()

```java
class Solution {
    LinkedList<Integer> stack = new LinkedList<>();		// 临时不完整的链路
    List<List<Integer>> result = new ArrayList<>();		// 所有的链路结果
    boolean[] vis;		// 剪枝：已遍历的节点
    int[] nums;

    public List<List<Integer>> permute(int[] nums) {
        vis = new boolean[nums.length];
        this.nums = nums;
        dfs();
        return result;
    }

    public void dfs() {
        // 判断是否为解
        if (stack.size() == nums.length) {
            result.add(new ArrayList<>(stack));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            // 剪枝处
            if(vis[i]){
                continue;
            }
            // 正向操作：放入、标记已遍历
            stack.addLast(nums[i]);
            vis[i] = true;
            dfs();	// 递归
            // 反向操作：拿出、取消标记
            vis[i] = false;
            stack.pollLast();
        }
    }
}
```

### dfs(...)

```java
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        // 这些变量我都是在 dfs 递归函数外面创建的，只是传递，里面又不会 new，那么结果就一直保存着
        boolean[] vis = new boolean[nums.length];
        LinkedList<Integer> stack = new LinkedList<>();		// 临时不完整的链路
        List<List<Integer>> result = new ArrayList<>();		// 所有的链路结果
        
        dfs(nums, vis, stack, result);
        return result;
    }

    public void dfs(int[] nums, boolean[] vis, LinkedList<Integer> stack, List<List<Integer>> result) {
        // 判断是否为解
        if (stack.size() == nums.length) {
            result.add(new ArrayList<>(stack));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            // 剪枝处
            if(vis[i]){
                continue;
            }
            // 正向操作：放入、标记已遍历
            stack.addLast(nums[i]);
            vis[i] = true;
            dfs(nums, vis, stack, result);	// 递归
            // 反向操作：拿出、取消标记
            vis[i] = false;
            stack.pollLast();
        }
    }
}
```

## 题

[排列组合.md](..\数\排列组合.md) 

 [22. 括号生成.md](..\..\题\leetcode\22. 括号生成.md) 

 [37. 解数独.md](..\..\题\leetcode\37. 解数独.md) 

