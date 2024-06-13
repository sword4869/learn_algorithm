- [1. 二叉查找树](#1-二叉查找树)
- [2. 平衡二叉树](#2-平衡二叉树)
  - [2.1. 旋转机制](#21-旋转机制)
    - [2.1.1. 左旋](#211-左旋)
    - [2.1.2. 右旋转](#212-右旋转)
- [3. 红黑树(平衡二叉B树)](#3-红黑树平衡二叉b树)
  - [3.1. 添加结点](#31-添加结点)

---

1. 二叉树→加入排序，二叉查找树
2. 二叉查找树→加入平衡，平衡二叉树
3. 二叉查找树→加入特殊的平衡规则，红黑树。红黑树，是自平衡的二叉查找树。

## 1. 二叉查找树
![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132310382.png)

弊端：
![Alt text](../../../images/image-7.png)

## 2. 平衡二叉树

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132310761.png)

双左则右，左右则左右：
- 左左：一次右旋
- 左右：一次子树左旋，一次右旋
- 右右：一次左旋
- 右左：一次子树右旋，一次左旋

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132310837.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311904.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311072.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311164.png)

### 2.1. 旋转机制

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311535.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311857.png)

#### 2.1.1. 左旋

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311080.png)

#### 2.1.2. 右旋转

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311170.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311211.png)

## 3. 红黑树(平衡二叉B树)

增删改查性能都很好。

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311131.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311356.png)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311445.png)

### 3.1. 添加结点

默认颜色:添加节点默认是红色的(效率高)

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132311328.png)

**父黑叔黑爷红**

父红叔红：都要，且爷递归

父红叔黑：触发下面的复杂旋转

**左右看父，且父递归。左左/右右看爷反，父黑爷红**

父为左，就父左旋；父为右，就父右旋。

左左则爷右旋；右右则爷左旋。
```
1. 根 ---------------------> 根变黑色
2. 非根
    ---> 父黑 ---> 无
    ---> 父红(因为默认子是红，不能父子都红)
        --> 叔红: 父黑叔黑爷红、爷当前递归
        --> 叔黑：
            --> 父为左
                --> 子为左：父黑爷红（叔已黑），爷右旋
                --> 子为右：父左旋，父当前递归
            --> 父为右
                --> 子为左：父右旋，父当前递归
                --> 子为右：父黑爷红（叔已黑），爷左旋
```

- 添加15：非根、父红、叔红。

    ![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132310614.png)

- 添加14：非根、父红、叔黑，父左子左。

    ![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132310746.png)

- 添加16：非根、父红、叔黑、父左子右。

    ![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406132310048.png)