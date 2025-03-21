[toc]

求从左上角到右下角的最短路径：有几个、长度是几。

可上下左右斜着走。

e.g.

```
{{1,0,0,0,0},
 {0,2,0,0,0},
 {0,0,1,0,0},
 {0,0,0,1,0},
 {0,0,0,0,1}}
```

有一条最短路径，长度6

e.g.

```
{{0,0,0,0,0},
 {0,2,0,0,0},
 {0,0,1,0,0},
 {0,0,0,1,0},
 {0,0,0,0,1}}
```

无

e.g.

```
{{1,0,0,0,0},
 {0,2,0,0,0},
 {0,0,1,1,0},
 {0,0,1,0,1},
 {0,0,0,1,1}}
```

两条，长度7

## dfs 之处理当前节点

- 进入dfs的可能合理可能不合理，dfs进入后才剪枝。
- 处理的是自身节点，那么多个dfs只需要一次处理。
- 终点的return前更新是 length+自身，因为循环中才进行统计自身节点，直接return时还没统计自身

```java
package com.example;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[][] input_map =
                {{1, 0, 0, 0, 0}, {0, 2, 0, 0, 0}, {0, 0, 1, 0, 0}, {0, 0, 0, 1, 0}, {0, 0, 0, 0, 1}};
        int[] res = solution.CheckShortestPathOnlyOne(input_map);
        System.out.println(Arrays.toString(res));
    }

    static class Solution {
        boolean[][] vis;
        int m;
        int n;
        HashMap<Integer, Integer> res = new HashMap<>();
        Integer min = Integer.MAX_VALUE;
        int length = 0;

        //                   r  d  l  u  dr  dl  ul ur
        int[] di = new int[]{0, 1, 0, -1, 1, 1, -1, -1};
        int[] dj = new int[]{1, 0, -1, 0, 1, -1, -1, 1};

        int[][] input_map;

        public int[] CheckShortestPathOnlyOne(int[][] input_map) {
            m = input_map.length;
            n = input_map[0].length;
            vis = new boolean[m][n];
            this.input_map = input_map;

            if (input_map[0][0] == 0) {
                return null;
            }

            dfs(0, 0);

            if (res.size() != 0) {
                return new int[]{res.get(min), min};
            } else {
                return null;
            }
        }

        public void dfs(int i, int j) {
            if (i < 0 || i >= m || j < 0 || j >= n || input_map[i][j] == 0 || vis[i][j]) {
                return;
            } else if (i == m - 1 && j == n - 1) {
                int len = length + input_map[i][j];
                res.put(len, res.getOrDefault(len, 0) + 1);
                min = Math.min(len, min);
                return;
            }

            vis[i][j] = true;
            length += input_map[i][j];
            for (int p = 0; p < 8; p++) {
                dfs(i + di[p], j + dj[p]);
            }
            length -= input_map[i][j];
            vis[i][j] = false;
        }
    }
}
```

## dfs 之处理下一个节点

- 进入dfs前就进行处理，那么每个dfs都要处理
- 剪枝也是对剪去不合理的下一个节点，进入dfs的都是合理的节点。

```java
import java.util.*;

public class Main{
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[][] input_map =
                {{1,0,0,0,0},{0,2,0,0,0},{0,0,1,0,0},{0,0,0,1,0},{0,0,0,0,1}}
        ;
        int[] res = solution.CheckShortestPathOnlyOne(input_map);
        System.out.println(Arrays.toString(res));
    }
    static class Solution {
        boolean[][] vis;
        int m;
        int n;
        HashMap<Integer, Integer> res = new HashMap<>();
        Integer min = Integer.MAX_VALUE;
        int length = 0;

        //                   r  d  l  u  dr  dl  ul ur
        int[] di = new int[]{0, 1, 0, -1, 1, 1, -1, -1};
        int[] dj = new int[]{1, 0, -1, 0, 1, -1, -1, 1};

        int[][] input_map;

        public int[] CheckShortestPathOnlyOne(int[][] input_map) {
            m = input_map.length;
            n = input_map[0].length;
            vis = new boolean[m][n];
            this.input_map = input_map;

            if(input_map[0][0] == 0){
                return null;
            }

            vis[0][0] = true;
            length = input_map[0][0];
            dfs(0, 0);

            if (res.size() != 0) {
                return new int[]{res.get(min), min};
            } else {
                return null;
            }
        }

        public void dfs(int i, int j) {
            if (vis[m - 1][n - 1] == true) {
                res.put(length, res.getOrDefault(length, 0) + 1);
                min = Math.min(length, min);
                return;
            }

            for (int p = 0; p < 8; p++) {
                int tem_i = i + di[p];
                int tem_j = j + dj[p];
                if (tem_i < 0 || tem_i >= m || tem_j < 0 || tem_j >= n || input_map[tem_i][tem_j] == 0 || vis[tem_i][tem_j]) {
                    continue;
                }
                vis[tem_i][tem_j] = true;
                length += input_map[tem_i][tem_j];
                dfs(tem_i, tem_j);
                length -= input_map[tem_i][tem_j];
                vis[tem_i][tem_j] = false;
            }
        }
    }
}
```

