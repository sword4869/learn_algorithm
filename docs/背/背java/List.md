# ArrayList



```java
/* 两种方式的本质: 初始化和声名时的类型一致*/
List<List<Integer>> list = new ArrayList<>();		// 方式1: 默认不写就是保持一致。
List<List<Integer>> list2 = new ArrayList<List<Integer>>();		// 方式2: 内部的 List<Integer> 是表明内部容器的类型，和前面的声名类型一致
// 不能 new ArrayList<ArrayList<Integer>>()。
// 而 ArrayList<ArrayList<Integer>> list = new ArrayList<ArrayList<Integer>>(); 是对的
// 不能 new ArrayList<ArrayList>() 
// 不能 new new ArrayList<List>();

/* 上面声名了内容类型是 List<Integer> */
list.add(new ArrayList<>());	// 方式1: 如同一维时, List<Integer> list = new ArrayList<>();
list.add(new ArrayList<Integer>());		// 方式2: 如同一维时, List<Integer> list = new ArrayList<Integer>();

list.get(0).add(12);
for(List<Integer> l: list){		// 必须要指定类型, 因为取出来时泛型擦除了，如同一维时 Integer i = list.get(0) 会指定Integer
    for(int num: l){
        System.out.println(l);
    }
    System.out.println();
}
```

![image-20240717170417029](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407171704489.png)

```java
List<String>[] dp = new ArrayList[n+1];
for(int i = 0; i <= n; i++){
    dp[i] = new ArrayList<>();
    // dp[i] = new ArrayList<String>();  也行
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