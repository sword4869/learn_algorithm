- 正则表达式性能要低。

- lambda比正常写性能要低

- String转char一次写

    ![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410100928291.png)

- map优化：判断包含则返回，不包含则放，可以用put的返回值判断；当不需要value时，放固定对象；
  
    ![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410100928292.png)

    ![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410100928293.png)

- 数组转几何
  
    ![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410100928294.png)