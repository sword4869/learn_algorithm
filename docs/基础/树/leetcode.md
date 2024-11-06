 [101.对称二叉树.md](..\..\题\leetcode\101.对称二叉树.md) 

 [226. 翻转二叉树.md](..\..\题\leetcode\226. 翻转二叉树.md)  



[104. 二叉树的最大深度.md](..\..\题\leetcode\104. 二叉树的最大深度.md)  

[103. 二叉树的锯齿形层序遍历.md](..\..\题\leetcode\103. 二叉树的锯齿形层序遍历.md) 

 [543. 二叉树的直径.md](..\..\题\leetcode\543. 二叉树的直径.md) 



 [96. 不同的二叉搜索树.md](..\..\题\leetcode\96. 不同的二叉搜索树.md)  [95. 不同的二叉搜索树 II.md](..\..\题\leetcode\95. 不同的二叉搜索树 II.md) 





```java
import java.util.*;

// 注意类名必须为 Main, 不要有任何 package xxx 信息
public class Main {

    static int max = Integer.MIN_VALUE;
    static Node[] nodes;
    static boolean[] vis;
    static int total = 0;
    static int temp_max;

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] nums = new int[n];
        int[] parent = new int[n];

        for(int i =0;i<n;i++)
            nums[i] = in.nextInt();
            
        for(int i =0;i<n;i++)
            parent[i] = in.nextInt();

        nodes = new Node[n + 1];
        vis = new boolean[n + 1];

        Node tree = null;
        for(int i=0;i<n;i++){
            if(i == 0){
                tree = new Node(nums[0]);
                nodes[1] = tree;
            }
            else{
                Node pa = nodes[parent[i]];
                if(pa.left == null){
                    pa.left = new Node(nums[i]);
                    nodes[i + 1] = pa.left;
                }
                else{
                    pa.right = new Node(nums[i]);
                    nodes[i + 1] = pa.right;
                }
            }
        }

        for(int i = 1; i <= n; i++){
            temp_max = Integer.MIN_VALUE;
            total = 0;
            dfs(nodes[i].left);
            int left_max = temp_max;

            
            temp_max = Integer.MIN_VALUE;
            total = 0;
            dfs(nodes[i].right);
            int right_max = temp_max;

            int res = nodes[i].val;
            res = Math.max(res, res + left_max);
            res = Math.max(res, res + right_max);
            max = Math.max(max, res);

            // System.out.printf("left: %d, right: %d, res: %d\n", left_max, right_max, res);
        }

        System.out.println(max);
    }

    public static void dfs(Node root){
        if(root == null){
            temp_max = Math.max(temp_max, total);
            return;
        }
        // System.out.printf("total: %d, root.val: %d\n", total, root.val);

        total += root.val;
        dfs(root.left);
        total -= root.val;
    
        total += root.val;
        dfs(root.right);
        total -= root.val;
    }

    static class Node{
        int val;
        Node left;
        Node right; 

        public Node(int val){
            this.val = val;
        }
    }
}
```

