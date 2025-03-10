[toc]

## LRU

hashmap存key和Node + 双链表

hashmap：

​	O（1）找到key对应的节点，来查找、更新其值。

双链表：

​	来维护LRU的顺序。

​	双向，因为需要删除和插入需要前一个。

```
put:
-> map中不存在：[头插结点] [map入]
    -> 超容：[链表断尾] [map删除]
-> map中存在：[更新val] [移动到头]

get:
-> map中不存在：返回-1
-> map中存在：[移动到头] [返回val]
```

```java
// 146. LRU 缓存
class LRUCache {
    int capacity;
    HashMap<Integer, Node> map = new HashMap<>();
    DList dList = new DList();

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }

    public int get(int key) {
        Node m = map.get(key);
        if (m == null) {
            return -1;
        } else {
            setHead(m);
            return m.value;
        }
    }

    public void put(int key, int value) {
        Node m = map.get(key);
        // 无：添加，考虑淘汰
        if (m == null) {
            if (map.size() >= capacity) {
                Node last = dList.dummy.pre;
                dList.remove(last);
                map.remove(last.key);
            }
            Node added = new Node(key, value);
            dList.add(dList.dummy, added);
            map.put(key, added);
        } 
        // 有：替换，移动到头
        else {
            m.value = value;
            setHead(m);
        }
    }

    public void setHead(Node m) {
        if (m != dList.dummy.next) {
            dList.remove(m);
            dList.add(dList.dummy, m);
        }
    }
    
    static class Node {
        int key;
        int value;
        Node next;
        Node pre;

        public Node() {
        }

        public Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    static class DList {
        Node dummy = new Node();

        public DList() {
            dummy.next = dummy;
            dummy.pre = dummy;
        }

        public void add(Node pre, Node added) {
            Node next = pre.next;
            pre.next = added;
            added.pre = pre;
            added.next = next;
            next.pre = added;
        }

        public void remove(Node cur) {
            Node pre = cur.pre;
            Node next = cur.next;
            pre.next = next;
            next.pre = pre;
        }
    }
}
```


## LFU

hashmap存key和Node + hashMap存局部双链表

没有全局双链表了，因为**淘汰**时需要O（1）根据 **最小频率 minFreq** 来找到节点（局部双链表LRU中的最后节点）

**查找、更新**：从key获取hashmap的Node，再用node的freq获取freqMap的局部双链表。

```java
// 460. LFU 缓存
class LFUCache {
    int capacity;

    HashMap<Integer, Node> map = new HashMap<>();
    // 没有全局链表 DList dList = new DList(); 了，而是放在map中的局部链表。
    HashMap<Integer, DList> freqMap = new HashMap<>();

    int minFreq = 1;

    public LFUCache(int capacity) {
        this.capacity = capacity;
    }

    public int get(int key) {
        Node m = map.get(key);
        if (m == null) {
            return -1;
        } else {
            update(m, null);
            return m.value;
        }
    }

    public void put(int key, int value) {
        Node m = map.get(key);
        if (m == null) {
            if (map.size() >= capacity) {
                // freqMap删除最小频率的节点，删除局部链表的最后节点
                DList dList = freqMap.get(minFreq);
                Node last = dList.dummy.pre;
                dList.remove(last);
                // Map也删除
                map.remove(last.key);
            }

            Node added = new Node(key, value);
            added.freq = 1;
            // map添加
            map.put(key, added);
            // freq添加
            DList dList = freqMap.getOrDefault(1, new DList());
            dList.add(dList.dummy, added);
            freqMap.put(1, dList);
            // 最小频率是新增的1
            minFreq = 1;
        } else {
            update(m, value);
        }
    }

    public void update(Node m, Integer value){
        if(value != null){
            m.value = value;
        }

        // freq删除老频率
        DList dList = freqMap.get(m.freq);
        dList.remove(m);
        // 确保空时加最小频率
        if(dList.dummy.next == dList.dummy && m.freq == minFreq){
            minFreq++;
        }
        // freq添加新频率
        m.freq++;
        // 移动新的频率的链表里
        DList dList2 = freqMap.getOrDefault(m.freq, new DList());
        dList2.add(dList2.dummy, m);
        freqMap.put(m.freq, dList2);
    }

    static class Node {
        int key;
        int value;
        int freq;
        Node next;
        Node pre;

        public Node() {
        }

        public Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    static class DList {
        Node dummy = new Node();

        public DList() {
            dummy.next = dummy;
            dummy.pre = dummy;
        }

        public void add(Node pre, Node added) {		// 需要特别判断next是dummy的情况：空、尾插
            Node next = pre.next;
            pre.next = added;
            added.pre = pre;
            added.next = next;
            next.pre = added;
        }


        public void remove(Node cur) {		// 无须特别判断next是dummy的情况、只有一个真节点的情况
            if(cur == dummy){
                return;
            }
            Node pre = cur.pre;
            Node next = cur.next;
            pre.next = next;
            next.pre = pre;
        }
    }
}
```