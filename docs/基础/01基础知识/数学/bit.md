[toc]

## 与 

奇数(最右位是1)：N & 1 = 1

偶数(最右位是0)：N & 1 = 0

## 异或

### 基本规律

（1）相同的数异或则为0，任何数和0异或都是本身

​	N^N=0，0^N=N

（2）**交换律和结合律**

​	a^b=b^a, (a^b)^c = a^(b^c)

（3）还可以看作**无进位相加**：0+0=0，1+1=0，1+0=0+1=1

### 数字交换

```java
int a = 甲, b = 乙;
a = a ^ b	// a = 甲^乙, b = 乙
b = a ^ b	// b = 甲^乙^乙=甲^0=甲，a = 甲^乙
a = a ^ b	// a = 甲^乙^甲=乙, b = 甲
    
// b a b 一样，相当于变量名而已
```

前提：内存不是同一块。比如，数组

```java
a[i] = a[i] ^ a[j]		// a[i] = a[i] ^ a[j] = 0, a[j] = 随之0
a[j] = a[i] ^ a[j]		// a[j] = 0 ^ 0 = 0, a[i] = 0
a[i] = a[i] ^ a[j]		// 0 0
```

```java
public void swap(int[] nums, int i, int j) {
    if(i == j) return;
    nums[i] = nums[i] ^ nums[j];
    nums[j] = nums[i] ^ nums[j];
    nums[i] = nums[i] ^ nums[j];
}

private void swap(int[] nums, int i, int j){
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
```

### 奇偶

一批数，里面包含多个多种数

（1）一种数有奇数个，其他种数各有偶数个，求这种数。

​	a^a^a^b^b^c^c=a，即为所求

（2）两种数有奇数个，其他种数各有偶数个，求这两种数。

​	err = a^a^a^b^b^b^c^c^d^d=a^b

​	因为两种数，所以a≠b，所以a^b≠0，所以err必有一位是1（提最右边1 `x & (~x + 1)`）

​	根据这位是1是0可以将数分为

<img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410090909083.png" alt="image-20241009090947025" style="zoom: 67%;" />

​	那么，a^b^(1位数) = a or b，a^b^(a or b) = b or a

### 实现加法

 [371. 两整数之和.md](..\..\题\leetcode\371. 两整数之和.md) ：异或（无进位加法）和与（进位） 来实现加法（有进位加法）。


## 取反~x = -(x+1)

见 408 原码

-  ~1 = -2
- ~(-2)=1

## lowbit: x & -x

`lowbit` ( 非负整数 x ) 

- 角度1：x 在二进制表示下取**最右的1是第几位**。

  - 比如5 的二进制是 ：0101 ， 所以有：lowbit ( 5 ) = 1

  - 比如10 的二进制是 ：1010，所以有：lowbit ( 10 ) = 2

- 角度2：**x中最大的2的n次幂的因数**
  - 奇偶快速结果：当x为0时结果为0；x为奇数时，结果为1
  - 10的因子2，12的因子4，16的因子16
  




公式：`lowbit( x )` 

- = `x & ( ~x + 1 )`  = x & (-(x+1)+1) 

- = `x & ( -x )`。



```
e.g. lowbit ( 10 ) = 2
0001010	x
1110101	~x
1110110 ~x + 1

  0001010
& 1110110
---------
  0000010
```

## x&=(x-1)

`x&=(x-1)`：**将 x 的最后一个 1 变成 0**：

- `11`：`11 & 10 = 19`
- `10`: `10 & 11 = 00`
- `00`：往前找1。找不到溢出？这就要求先判断x>0

### 统计出某个二进制数里面1的个数

```java
int count(int x){
    int res = 0;
    while(x>0){
        x&=(x-1);
        res++;
    }
    return res;
}
```

### 判断一个数字是否是 2 次幂

```java
boolean isPowerOfTwo(int x)
{
    return (x>0) && (x & (x - 1))==0;
}
```

