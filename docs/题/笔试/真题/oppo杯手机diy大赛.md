![image-20240903184733665](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202409031847731.png)

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        long[] a = new long[n];
        long[] b = new long[n];
        long max_a = 0;
        long max_a_2 = -1;
        long min_a = 1000000002;
        long min_a_2 = 1000000001;
        long max_b = 0;
        long max_b_2 = -1;
        long min_b = 1000000002;
        long min_b_2 = 1000000001;
        int idx_max_a = -1;
        int idx_max_a_2 = -1;
        int idx_min_a = -1;
        int idx_min_a_2 = -1;
        int idx_max_b = -1;
        int idx_max_b_2 = -1;
        int idx_min_b = -1;
        int idx_min_b_2 = -1;
        long sum_a_0 = 0;
        long sum_b_0 = 0;
        // 注意 hasNext 和 hasNextLine 的区别
        for (int i = 0; i < n; i++) {
            a[i] = in.nextLong();
            b[i] = in.nextLong();

            sum_a_0 += a[i];
            sum_b_0 += b[i];

            if (a[i] > max_a) {
                max_a_2 = max_a;
                idx_max_a_2 = idx_max_a;
                max_a = a[i];
                idx_max_a = i;
            } else if (a[i] > max_a_2) {
                idx_max_a_2 = i;
                max_a_2 = a[i];
            }

            if (b[i] > max_b) {
                max_b_2 = max_b;
                idx_max_b_2 = idx_max_b;
                max_b = b[i];
                idx_max_b = i;
            } else if (b[i] > max_b_2) {
                max_b_2 = b[i];
                idx_max_b_2 = i;
            }


            if (a[i] < min_a) {
                idx_min_a_2 = idx_min_a;
                min_a_2 = min_a;
                min_a = a[i];
                idx_min_a = i;
            } else if (a[i] < min_a_2) {
                min_a_2 = a[i];
                idx_min_a_2 = i;
            }

            if (b[i] < min_b) {
                idx_min_b_2 = idx_min_b;
                min_b_2 = min_b;
                min_b = b[i];
                idx_min_b = i;
            } else if (b[i] < min_b_2) {
                min_b_2 = b[i];
                idx_min_b_2 = i;
            }
        }

        // System.out.printf("%d %d %d %d\n", max_a, max_a_2, min_a, min_a_2);
        // System.out.printf("%d %d %d %d\n", max_b, max_b_2, min_b, min_b_2);
        for (int i = 0; i < n; i++) {
            long sum_a = sum_a_0 - a[i];
            if(i == idx_max_a){
                sum_a -= max_a_2;
                sum_a -= min_a;
            }
            else if(i == idx_min_a){
                sum_a -= max_a;
                sum_a -= min_a_2;
            }
            else{
                sum_a -= max_a;
                sum_a -= min_a;
            }
            long sum_b = sum_b_0 - b[i];
            if(i == idx_max_b){
                sum_b -= max_b_2;
                sum_b -= min_b;
            }
            else if(i == idx_min_b){
                sum_b -= max_b;
                sum_b -= min_b_2;
            }
            else{
                sum_b -= max_b;
                sum_b -= min_b;
            }
            
            double res = (double) ( sum_a + sum_b) / (2 * (n-3));
            // System.out.printf("%d %d %f\n", sum_a, sum_b, res);
            System.out.println(res);
        }
    }
}
```

[OPPO 2024届校招正式批笔试题-研发通用（C卷） (qq.com)](https://mp.weixin.qq.com/s/JXVQXC4gCsCEIheFqBiPbA)

[OPPO 2024届校招正式批笔试题-研发通用（C卷） - 字节幺零二四 - 博客园 (cnblogs.com)](https://www.cnblogs.com/zijie1024/articles/18303751)
