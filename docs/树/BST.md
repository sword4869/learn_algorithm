
## 二叉查找树
![Alt text](../../images/image-6.png)

弊端：
![Alt text](../../images/image-7.png)

## 平衡二叉树

![Alt text](../../images/image-8.png)

双左则右，左右则左右：
- 左左：一次右旋
- 左右：一次子树左旋，一次右旋
- 右右：一次左旋
- 右左：一次子树右旋，一次左旋

![Alt text](../../images/image-14.png)

![Alt text](../../images/image-15.png)

![Alt text](../../images/image-16.png)

![Alt text](../../images/image-17.png)

### 旋转机制

![Alt text](../../images/image-9.png)

![Alt text](../../images/image-10.png)

#### 左旋

![Alt text](../../images/image-11.png)

#### 右旋转

![Alt text](../../images/image-12.png)

![Alt text](../../images/image-13.png)

## 红黑树(平衡二叉B树)

增删改查性能都很好。

![Alt text](../../images/image-18.png)

![Alt text](../../images/image-19.png)

![Alt text](../../images/image-20.png)

### 添加结点

默认颜色:添加节点默认是红色的(效率高)

![Alt text](../../images/image-21.png)

![Alt text](../../images/image-22.png)

![Alt text](../../images/image-23.png)

![Alt text](../../images/image-24.png)