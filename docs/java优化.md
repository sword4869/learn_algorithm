- 正则表达式性能要低。
-  lambda比正常写性能要低
- swap

    ```java
    // a = a ^ b;
    // b = a ^ b;
    // a = a ^ b;

    a ^= b;
    b ^= a;
    a ^= b;
    ```
    但是数组不可直接写，会在异或相等元素时出问题。上面可以是因为a、b是两个变量，而nums[i] 只有一个变量。
    ```java
    // public void swap(int[] nums, int i, int j) {
    //     nums[i] = nums[i] ^ nums[j];    // x = x ^ x = 0
    //     nums[j] = nums[i] ^ nums[j];    // x = 0 ^ 0 = 0
    //     nums[i] = nums[i] ^ nums[j];    // x = 0 ^ 0 = 0
    // }

    public void swap(int[] nums, int i, int j) {
        if(i == j) return;
        nums[i] = nums[i] ^ nums[j];
        nums[j] = nums[i] ^ nums[j];
        nums[i] = nums[i] ^ nums[j];
    }
    ```
- 大小

    ![alt text](../images/image-31.png)

- String转char一次写

    ![alt text](../images/image.png)

- map优化：判断包含则返回，不包含则放，可以用put的返回值判断；当不需要value时，放固定对象；
    
    ![alt text](../images/image-1.png)

    ![alt text](../images/image-30.png)

- 数组转几何
    
    ![alt text](../images/image-32.png)