# 暴力匹配

手机暴力匹配，效果等同调用 indexOf 函数

![image-20240618122903495](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406181230456.png)

```java
class Solution {
    public int strStr(String haystack, String needle) {
        return haystack.indexOf(needle);
    }
}
```
```java
// 28. 找出字符串中第一个匹配项的下标
class Solution {
    public int strStr(String haystack, String needle) {
        char[] origin = haystack.toCharArray();		// 目标串
        char[] pattern = needle.toCharArray();		// 模式串

        int i = 0, j = 0;
        while (i < origin.length && j < pattern.length) {
            if (origin[i] != pattern[j]) {   
                i = i - j + 1;      // 回退到i的起始点的下一个位置。不是直接当下位置的i++
                j = 0;              // 清零
            } else {
                i++;
                j++;
            }
        }
        if (j == pattern.length) {
            return i - pattern.length;
        } else {
            return -1;
        }
    }
}
```
# KMP

构建next数组：i代表next数组赋值，j表示已匹配前缀和根据next数组移动。

- i从1开始，j从0开始：因为第一个字符必然没有前后缀，next[0] = 0
- 遍历i，回退是j动i不动匹配

KMP匹配：i是目标串，j是模式串和根据next数组移动。

- i和j同步，都从0开始。

![image-20240618123321201](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406181233330.png)



```java
// 28. 找出字符串中第一个匹配项的下标
class Solution {
    public int strStr(String haystack, String needle) {
        char[] origin = haystack.toCharArray();
        char[] pattern = needle.toCharArray();
        int[] next = new int[pattern.length];
        
        // 构建next数组
        int i = 1, j = 0;
        while (i < pattern.length) {
            if (pattern[i] == pattern[j]) {
                next[i] = j + 1;
                i++;
                j++;
            } else {
                // j = next[j -1] || j == 0 
                if (j == 0) {   // j已经是0了，不能再退，就让它next[i]=0。直接i++，处理下一个
                    i++;
                } else {
                    j = next[j - 1];
                }
            }
        }

		// KMP
        i = 0;	// 目标串
        j = 0;	// 模式串
        // while (pattern.length - j <= origin.length - i) {   // pattern剩余未匹配的要小于等于origin剩余未匹配的。没必要，ms都看不出来
        while (i < origin.length) {
            if (origin[i] == pattern[j]) {
                i++;
                j++;
            } else {
                if (j == 0) {
                    i++;
                } else {
                    j = next[j - 1];
                }
            }
            // 匹配完所有模式串字符
            if (j == pattern.length) {
                return i - j;
            }
        }
        return -1;
    }
}
```