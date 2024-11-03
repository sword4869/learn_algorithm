寻找字符串中子串的位置，**串的模式匹配**。

字符串是主串/目标串，

子串是**模式串**（构建前缀数组）

## 暴力匹配

i和j都会回退。



手机暴力匹配，效果等同调用 indexOf 函数。

时间复杂度 O((n-m+1)*m)，主串的长度是n，子串是m。

![image-20240618122903495](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406181230456.png)

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
```java
class Solution {
    // haystack 目标串，needle 模式串
    public int strStr(String haystack, String needle) {
    }
}
```



## KMP

i不会回退，j会回退到下次能匹配的位置。



**前缀指的是不包含尾字符的所有子串；后缀指的是不包含首字符的所有子串**



先假设有一个next数组：

​	`next[i]`表示`[0...i]`子串匹配的 **最长公共前后缀** 的长度。

​	则**前缀字符串是 索引`[0, next[i]-1]`，对应相等的后缀字符串是 索引 `[i-next[i]+1, i]`**



KMP匹配：i是目标串待匹配字符，j是模式串的待匹配字符。

（1）i和j同步，都从0开始。

（2）比较目标串待匹配字符 `origin[i]` 与模式串的待匹配字符 `pattern[j]` 是否相等

​	相等，则 i++, j++

​	不相等，则

​		不断回退到 `j = next[j - 1]`，直接移动到下次能匹配的位置：查找模式串的子串`[0, j-1]`是前面的已匹配字符，其最长公共前后缀长度是 `next[j-1]`，其前缀是模式串 `[0, next[j-1]-1]`，那么前缀和后缀重叠后，下一个待匹配字符是`next[j]`。

​		直到 `j = 0`，已无`next[j-1]`，那么找不到，i++。



<img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410232208934.png" alt="image-20241023220814861" style="zoom:50%;" />

（2）比较的下一个字符 `patternArr[j]` 与后缀的下一个字符 `patternArr[i]` 是否相等

​	相等，则新的前后缀必相等。 前缀字符串是 索引`[0, j]` ，对应相等的后缀字符串是 索引`[i-j, i]`

​	不相等，则回退到 `j = next[j - 1]`直接移动到下次能匹配的位置



为 **模式串** 构建next数组：相当于自己匹配自己。

- i从1开始，j从0开始：因为第一个字符必然没有前后缀，next[0] = 0，i就只用从1开始，且上一个子串的最长公共前后缀的长度是0

  且自己匹配自己，那么匹配完了。

- ```
  0 1				// next[1]: ==, 则 +1
    i
  a a b a a f
    a a b a a f
    j
  
  
  0 1	0		   // next[2]: !=, 则回退 j = next[1-1]=0
      i
  a a b a a f
    a a b a a f
      j
    
    
  0 1	0 1		   // next[3]: ==, 则 +1
        i
  a a b a a f
        a a b a a f
        j
    
    
  0 1	0 1 2		   // next[4]: ==, 则 +1
          i
  a a b a a f
        a a b a a f
          j
    
    
  0 1	0 1 2		   // next[5]: !=, 则回退 j = next[2-1]=1
            i
  a a b a a f
        a a b a a f
            j
            
  0 1	0 1 2 0		   // !=, 再回退 j = next[1-1]=0
            i
  a a b a a f
          a a b a a f
            j
  ```

```java
// 28. 找出字符串中第一个匹配项的下标
class Solution {
    public int kmp(String s, String p) {
        char[] origin = s.toCharArray();	// 源字符串
        char[] pattern = p.toCharArray();	// 目标子串
        int[] next = new int[pattern.length];	// next大小同目标字串
        
        // 构建next数组
        int i = 1, j = 0;
        while (i < pattern.length) {		// 自己匹配自己，那么j必不会超出
            if (pattern[i] == pattern[j]) {
                next[i] = next[i-1] + 1;		// 同 next[i] = j + 1
                i++;
                j++;
            } 
            else {	// j = next[j-1] || j == 0 
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
        while (i < origin.length && j < pattern.length) {
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
        }
        // 匹配完所有模式串字符
        if (j == pattern.length) 
            return i - j;
        else
	        return -1;
    }
}
```

![image-20241023202241977](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410232022043.png)

## 题

 [459. 重复的子字符串.md](..\..\题\leetcode\459. 重复的子字符串.md) 
