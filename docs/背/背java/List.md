# ArrayList

`List<List<Integer>> result = new ArrayList<>();`

```java
ArrayList<String>[] dp = new ArrayList[n+1];
for(int i = 0; i <= n; i++){
    dp[i] = new ArrayList<>();
}
```



```java
list.add("aaa");
list.add(1, "bbb");

list.remove("ccc");
list.remove(0);		// index

list.set(0, "QQQ");	

String s = list.get(0);
```

# LinkedList

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406122313615.png)

```java
LinkedList<Integer> s/q = new LinkedList<>();
```

```java
// 注意push的结果是反向的
LinkedList<Integer> stack = new LinkedList<>();
stack.push(1);
stack.push(2);
stack.push(3);
System.out.println(stack);   					// [3, 2, 1]
System.out.println(new ArrayList<>(stack));  	// [3, 2, 1]
```



栈：

​	入栈 `push`

​	出栈 `pop`

​	栈顶 `peek`

队列：

​	入栈 `offer ` 

​	出栈 `poll`

​	队头 `peek`



个数：`size()`

是空：`isEmpty()`

特殊：出栈底、出队尾：`pollLast()`