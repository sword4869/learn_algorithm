## 取最右的1

```java
int x = x & (~x + 1);

0001010	x
1110101	~x
0001011 x + 1

  0001010
& 1110110
---------
  0000010
```

