- [22.排列组合](#22排列组合)
- [37.解数独](#37解数独)
- [51.N皇后](#51n皇后)

----
## 22.排列组合

```java
class Solution {
    List<String> res = new ArrayList<>();

    public List<String> generateParenthesis(int n) {
        if (n <= 0) {
            return res;
        }
        dfs("", n, n);
        return res;
    }

    private void dfs(String str, int left, int right) {
        // 出现类似 ()) )) 这种格式都是错误的不用再继续了
        if (left < 0 || left > right)  
            return;
        if (left == 0 && right == 0) {
            res.add(str);
            return;
        }
        dfs(str + "(", left - 1, right);
        dfs(str + ")", left, right - 1);
    }
}
```

```java
class Solution {
    List<String> res = new ArrayList<>();

    public List<String> generateParenthesis(int n) {
        if (n <= 0) {
            return res;
        }
        dfs("", n, n);
        return res;
    }

    private void dfs(String str, int left, int right) {
        if (left == 0 && right == 0) {
            res.add(str);
            return;
        }
        if (left == right) {
            // 剩余左右括号数相等，下一个只能用左括号
            dfs(str + "(", left - 1, right);
        } else if (left < right) {
            // 剩余左括号小于右括号，下一个可以用左括号也可以用右括号
            if (left > 0) {
                dfs(str + "(", left - 1, right);
            }
            dfs(str + ")", left, right - 1);
        }
    }
}
```

## 37.解数独

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211824045.png)

行、列、整个board的9个9宫格：表示vis。
- 每个内都是9个数的数组，数组中下标1元素为true表示已经有0了。
```java
class Solution {
    // 表示已经被占用
    boolean[][] rows = new boolean[9][9];
    boolean[][] columns = new boolean[9][9];
    boolean[][] cells = new boolean[9][9];
    char[][] board;

    public void solveSudoku(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c != '.') {
                    rows[i][c - '1'] = columns[j][c - '1'] = cells[i / 3 * 3 + j / 3][c - '1'] = true;
                }
            }
        }
        this.board = board;
        System.out.println(dfs(0, 0));
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                System.out.print(c);
            }
            System.out.println();
        }
    }

    public boolean dfs(int i, int j) {
        while (board[i][j] != '.') {
            if (++j >= 9) {
                j = 0;
                if (++i >= 9) {
                    return true;
                }
            }
        }
        System.out.print(i + " " + j + " " + board[i][j]);
        for (int k = 1; k <= 9; k++) {
            if (rows[i][k - 1] || columns[j][k - 1] || cells[i / 3 * 3 + j / 3][k - 1]) {
                continue;
            }
            rows[i][k - 1] = columns[j][k - 1] = cells[i / 3 * 3 + j / 3][k - 1] = true;
            board[i][j] = (char) (k + '0');
            System.out.println(board[i][j]);
            // 可不能 j+1，要不然while判断时要处理board[i][j]的j为9的情况，很麻烦。
            if(dfs(i, j)){
                return true;
            }      
            board[i][j] = '.';
            rows[i][k - 1] = columns[j][k - 1] = cells[i / 3 * 3 + j / 3][k - 1] = false;
        }
        return false; 
    }
}
```

## 51.N皇后

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406211824315.png)

```java
class Solution {
    LinkedList<Integer> stack = new LinkedList<>();
    List<List<String>> result = new LinkedList<>();
    int n;
    boolean[] column;
    boolean[] slash;
    boolean[] backslash;
    
    char[] temp;

    public List<List<String>> solveNQueens(int n) {
        this.n = n;
        column = new boolean[n];
        slash = new boolean[2*n-1];
        backslash = new boolean[2*n-1];
        
        temp = new char[n];
        Arrays.fill(temp, '.');
        dfs(0);
        return result;
    }

    public void dfs(int i){
        if(i == n){
            List<String> t = new ArrayList<>();
            for(int p: stack){
                temp[p] = 'Q';
                t.add(new String(temp));
                temp[p] = '.';
            }
            result.add(t);
            return;
        }

        for(int j = 0 ; j < n; j++){
            if(column[j] || slash[i+j] || backslash[n-1+i-j]){
                continue;
            }
            stack.push(j);
            column[j] = slash[i+j] = backslash[n-1+i-j] = true;
            dfs(i+1);
            column[j] = slash[i+j] = backslash[n-1+i-j] = false;
            stack.pop();
        }
    }
}
```