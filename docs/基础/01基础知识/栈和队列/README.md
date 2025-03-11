[toc]

## 不同的出栈顺序有几个？

 [Catalan数.md](..\..\06动态规划\题型\Catalan数.md) 

## 环形队列

### rear留空

**front表示队头元素的位置，rear表示队尾元素的下一个位置（待填充的空位）**：[front, rear)

**但不可以占满**

大小：`(rear + n - front) % n`，因为左闭右开就不+1.

空：`front == rear`，队头是空位

满：`(rear + 1) % n == front`，最后一个位置不能添加。

![image-20240622125259672](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406221252728.png)



### rear留空 + front和rear自增（未经验证）

可以占满

大小：`rear - front`

空：`(rear - front) == 0`或 `front == rear`

满：`(rear - front) == n`

获取索引：`array[(front + i) % n]`。

- 头`array[front % n]`

- 尾`array[(rear - 1) % n]`

### 有size属性

[front, rear]

可以占满，因为判断完全就不需要通过 front和rear。

大小：`size`

空：`size == 0`

满：`size == n`

## 双栈模拟队列

[232. 用栈实现队列.md](..\..\..\题\leetcode\232. 用栈实现队列.md) 



> 计算题：有限容量。还是同样实现

栈的容量分别是O和P(O>P), **那么模拟实现的队列最大容量是多少？2P+1**

- 存储栈是大容量的O。

- 入队出队顺序：

  - 入存储栈P个，然后倒入输出栈中。出队P个 `1..P`

  - 再入存储栈P+1个，然后倒入输出栈P个。

  - 先出存储栈的那一个，下标`P+1`。

  - 再出输出栈的P个。 `P+2...2P+1`

​	![image-20240622113858345](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406221138384.png)

PS：如果入队是P，出队是O？那么倒入出队P个，入队只能再存P个，一共2P个。

PS：为什么不是2P+2？因为第三步时，P+1下面不可能是P+2.



## 用队列实现栈

[225. 用队列实现栈.md](..\..\..\题\leetcode\225. 用队列实现栈.md)：将前面的元素重新入队

- 双队列：类似幸存者区
- 单队列：用size区分前面的元素

## le

[155. 最小栈.md](..\..\..\题\leetcode\155. 最小栈.md) 

[239. 滑动窗口最大值.md](..\..\..\题\leetcode\239. 滑动窗口最大值.md) ：双端队列 

[946. 验证栈序列.md](..\..\..\题\leetcode\946. 验证栈序列.md)  

[20括号栈.md](..\..\..\题\leetcode\20括号栈.md) 
