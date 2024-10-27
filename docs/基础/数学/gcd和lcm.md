```java
// 最大公约数
// (6, 4); (4, 6) 第一轮会变成(6, 4)
public int gcd(int x, int y){
    return y > 0 ? gcd(y, x%y): x;
}
```

最大公约数 x 最小公倍数 = ab

$gcd(a,b) * lcm(a,b) = a*b$

