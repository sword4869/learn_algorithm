- [1. 栈stack](#1-栈stack)
  - [1.1. 头文件](#11-头文件)
  - [1.2. 函数](#12-函数)
  - [1.3. 例子](#13-例子)
- [2. 队列queue](#2-队列queue)
  - [2.1. 头文件](#21-头文件)
  - [2.2. 函数](#22-函数)
  - [2.3. 例子](#23-例子)
---

# 1. 栈stack
LIFO: Last In First Out 后进先出
## 1.1. 头文件
`#include<stack>`

## 1.2. 函数
|返回值|函数|作用|
|-|-|-|
||`stack<T> s;`|声明一个存储T类型数据的栈|
||`stack<T> s2(s1)`|拷贝构造|
||s1.swap(s2)或者swap(s1,s2)|交换两个栈|
|void|s.push(T n);	|	将T类型数据n压入栈的顶端|
|void|s.pop()|弹出顶层元素|
|T|s.top()|获得顶层元素的值
|int|s.size()|	返回栈中元素的个数|
|bool|s.empty()|返回真表示空栈，假表示非空栈|

除此之外，容器vector的别的都没有，尤其是没有`[]`获取下标元素和`push_back()`（是`push()`）。
## 1.3. 例子

```cpp
#include <iostream>
#include <stack>
using namespace std;
int main()
{
    stack<int> s;             //声明存储int类型数据的栈
    s.push(1);                //{}→{1}
    s.push(2);                //{1}→{2,1}
    s.push(3);                //{2,1}→{3,2,1}
    cout << s.size() << endl; // 3
    cout << s.top() << endl;  // 3
    s.pop();                  //{3,2,1}→{2,1}
    cout << s.top() << endl;  // 2
    s.pop();                  //{2,1}→{1}
    cout << s.top() << endl;  // 1
    s.pop();                  //{1}→{}
    return 0;
}
```


# 2. 队列queue
FIFO: First In First Out 先进先出
## 2.1. 头文件
`#include<queue>`

## 2.2. 函数
|返回值|函数|作用|
|-|-|-|
||`queue<T> q;`|声明一个存储T类型数据的队列|
||`queue<T> q2(q1)`||拷贝构造|
||q1.swap(q2)或者swap(q1,q2)|交换两个队列|
|void|q.push(T n)或者q.emplace(T n)|	将T类型数据n压入队列尾端|
|void|q.pop()|	弹出队首元素|
|T|q.front()|	获得队首元素的值|
|T|q.back()|获得队尾元素的值|
|int|q.size()|	返回队列中元素的个数|
|bool|q.empty()|返回真表示空队列，假表示非空队列|

除此之外，容器vector的别的都没有，尤其是没有[]获取下标元素。

## 2.3. 例子
```cpp
#include <iostream>
#include <queue>
using namespace std;
int main()
{
    queue<int> q;              //声明存储int类型数据的队列
    q.push(1);                 //{}→{1}
    q.push(2);                 //{1}→{1,2}
    q.push(3);                 //{1,2}→{1,2,3}
    cout << q.size() << endl;  // 3
    cout << q.front() << endl; // 1
    cout << q.back() << endl;  // 3
    q.pop();                   //{1,2,3}→{2,3}
    cout << q.front() << endl; // 2
    q.pop();                   //{2,3}→{3}
    cout << q.front() << endl; // 3
    q.pop();                   //{3}→{}

    return 0;
}
```