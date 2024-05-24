双链表 + 双哨兵
```java
class Node {
    int value;
    Node next;
    Node pre;

    public Node() {
    }

    public Node(int value) {
        this.value = value;
    }
}

class DList {
    Node head = new Node();
    Node tail = new Node();

    public DList() {
        head.next = tail;
        tail.pre = head;
    }

    public void add(Node added) {
        Node first = head.next;
        head.next = added;
        added.pre = head;
        added.next = first;
        first.pre = added;
    }

    public void remove(Node cur) {
        cur.pre.next = cur.next;
        cur.next.pre = cur.pre;
    }

    // public Node removeLast(){
    //     Node last = dList.tail.pre;
    //     if(last != dList.head){
    //         dList.remove(last);
    //     }
    //     return last;
    // }

    // public void setHead(Node m) {
    //     if (m != head.next) {
    //         remove(m);
    //         add(m);
    //     }
    // }
}
```

```java
// 移除元素
dList.remove(cur);

// 添加元素
Node added = new Node(value);
dList.add(added);
```