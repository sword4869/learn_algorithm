

## 格式

- `Main`类
- 允许static变量

输入：
- `Scanner sc = new Scanner(System.in)`, `import java.util.Scanner;`, `System`不用导入。
- 输入 `nextInt()`，但是可能运算会超标 `long m = nums[i] * nums[j]` → `long m = (long) nums[i] * nums[j]`. 所以，还不如直接输入 `nextLong()` 转化为long 数组。
```java
import java.util.Scanner;

public class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++)    {
            nums[i] = sc.nextInt();
        }   
        int last = nums[1] - nums[0];
        if(last <= 0){
            System.out.println("No");
            return;
        }
        for(int i = 1; i < n-1;i++){
            int cur = nums[i+1] - nums[i];
            if(last <= cur){
                System.out.println("No");
                return;
            }
            last = cur;
        }
        System.out.println("Yes");
        return;
    }
}
```
```java
import java.util.Scanner;

// 注意类名必须为 Main, 不要有任何 package xxx 信息
public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // 注意 hasNext 和 hasNextLine 的区别
        while (in.hasNextInt()) { // 注意 while 处理多个 case
            int a = in.nextInt();
            int b = in.nextInt();
            System.out.println(a + b);
        }
    }
}
```

## 导包

```java
import java.util.*;

// // 输入
// import java.util.Scanner;

// // 集合
// import java.util.LinkedList;
// import java.util.List;
// import java.util.Map;
// ...

// // 帮手
// import java.util.Arrays;
// import java.util.stream.Collectors;
```

`java.lang.*`: 不需要导
- `System`
- `Math`
- `StringBuffer`, `StringBuilder`