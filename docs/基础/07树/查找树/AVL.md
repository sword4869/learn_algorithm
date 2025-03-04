[toc]

## 平衡二叉搜索树AVL

[7.5  AVL 树 * - Hello 算法 (hello-algo.com)](https://www.hello-algo.com/chapter_tree/avl_tree/#1_1)

AVL 树既是二叉搜索树，也是平衡二叉树。

### 平衡规则

任意节点的左右子树的高度差小于等于1。

### 旋转机制

如何找到目标调整节点 node? 

​	从插入的节点沿着父节点往上找到第一个失衡节点，即从下层往上层找。

左左则右，右右则左；左右左child右node，右左右child左node。

- 左左：一次右旋
- 右右：一次左旋
- 左右：一次子树左旋，一次右旋
- 右左：一次子树右旋，一次左旋
- PS: node和child都是从插入节点到失衡节点的路径上的。node是第一个失衡节点，child是node在失衡路径上的子节点（故而只有一个）。
- PS: "左右"，是以待插入节点为参照物，判断失衡节点node和child与其的关系。

触发时机: 当添加节点后，不再平衡。



#### 左旋

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311857.png)



![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311080.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311072.png)



#### 右旋

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311170.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311211.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132310837.png)



#### 左右旋转

![先左旋后右旋](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407170903571.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311904.png)



#### 右左旋转

![先右旋后左旋](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407170903481.png)



