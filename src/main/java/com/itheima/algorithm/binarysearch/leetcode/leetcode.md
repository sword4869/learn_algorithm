
## 367有效的完全平方数

taget就是`num`, `a[m]`就是`m*m`


## 69平方根

rightmost
```java
class Solution {
    public int mySqrt(int x) {
        if(x <= 1){
            return x;
        }
        int i = 1, j = x, ans = -1;
        while(i <= j){
            int m = (i+j) >>> 1;
            if(x < (long) m * m){
                j = m - 1;
            }else{
                ans = m;
                i = m + 1;
            }
        }
        return ans;
    }
}
```

## 34在排序数组中查找元素的第一个和最后一个位置