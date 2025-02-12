[toc]

## ArrayList

### 基本

```java
list.add("aaa");
list.add(1, "bbb");

list.remove("ccc");
list.remove(0);		// index

list.set(0, "QQQ");	

String s = list.get(0);
```



### 二维数组

```java
/* 两种方式的本质: 初始化和声名时的类型一致*/
List<List<Integer>> list = new ArrayList<>();		// 方式1: 默认不写就是保持一致。
List<List<Integer>> list2 = new ArrayList<List<Integer>>();		// 方式2: 内部的 List<Integer> 是表明内部容器的类型，和前面的声名类型一致
// 不能 List<List<Integer>> list = new ArrayList<ArrayList<Integer>>()。
// 而对的是 ArrayList<ArrayList<Integer>> list = new ArrayList<>();   
		   ArrayList<ArrayList<Integer>> list = new ArrayList<ArrayList<Integer>>(); 
// 还必须指定泛型，不能 new ArrayList<ArrayList>()  new new ArrayList<List>();

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

### 数组元素是集合

```java
List<String>[] dp = new List[n];	// 不用指定 <>，注意和下面的区别
		// 可 List List; List ArrayList; ArrayList ArrayList; 不可 ArrayList List
for(int i = 0; i < n; i++){
    dp[i] = new ArrayList<>();
    // dp[i] = new ArrayList<String>();  也行
}


List<List<Float>> buckets = new ArrayList<>();		// 用指定 <>
for (int i = 0; i < k; i++) {
    buckets.add(new ArrayList<>());
}
```

## LinkedList

个数：`size()`

是空：`isEmpty()`



栈：

​	入栈 `push`，出栈 `pop`，栈顶 `peek`

队列：

​	入栈 `offer`，出栈 `poll`，队头 `peek`



看似左队列，右栈。本质都是同一个链表。

​	队列是尾增 add offer addLast 头删 pop poll remove pollFirst，

​	栈是头增 push addFirst 头删

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images202406122313615.png)

```java
LinkedList<Integer> s/q = new LinkedList<>();
```

## 左队列，右栈

### LinkedList 反向

```java
// 注意push的结果是反向的
LinkedList<Integer> stack = new LinkedList<>();
stack.push(1);
stack.push(2);
stack.push(3);
System.out.println(stack);   					// [3, 2, 1]
System.out.println(new ArrayList<>(stack));  	// [3, 2, 1]

// 调用反向
Collections.reverse(stack);
System.out.println(stack);   					// [1, 2, 3]
System.out.println(new ArrayList<>(stack));  	// [1, 2, 3]
```
### LinkedList尾增尾删

```java
// (2) 尾增尾删
LinkedList<Integer> stack2 = new LinkedList<>();
stack2.addLast(1);
stack2.addLast(2);
stack2.addLast(3);
stack2.addLast(4);
stack2.pollLast();
String top = stack2.peekLast();

System.out.println(stack2);   					// [1, 2, 3]
System.out.println(new ArrayList<>(stack2));  	// [1, 2, 3]
```

### ArrayList

```java
ArrayList<Integer> stack3 = new ArrayList<>();
stack3.add(1);
stack3.add(2);
stack3.add(3);
stack3.add(4);
stack3.remove(stack3.size() - 1);

System.out.println(stack3);   					// [1, 2, 3]
System.out.println(new ArrayList<>(stack3));  	// [1, 2, 3]
```

