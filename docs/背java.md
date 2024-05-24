`return new int[]{1,2,3};`

`List<List<Integer>> result = new ArrayList<>();`

```java
char[][] cs = new char[strs.length][];      // 动态初始化
for (int i = 0; i < strs.length; i++) {
    cs[i] = strs[i].toCharArray();
}
```

```java
Arrays.sort(arr);
Arrays.sort(arr, (a,b)-> a-b);

Arrays.fill(arr, -1);
Arrays.fill(0, 3, -1);

int[] arr2 = Arrays.copyOf(arr, 3);
int[] arr3 = Arrays.copyOf(arr, arr.length);

int[] arr4 = Arrays.copyOfRange(arr, 0, 3);
int[] arr5 = Arrays.copyOfRange(arr, 0, arr.length);


int[] brr = new int[3];
System.arraycopy(arr, 0, brr, 0, 3);

boolean flag = Arrays.equals(arr, brr);
```

`Integer.MAX_VALUE`