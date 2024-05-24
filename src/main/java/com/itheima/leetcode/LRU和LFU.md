- [LRU](#lru)
- [LFU](#lfu)


---
## LRU

hashmap + 全局双链表

hashmap：用来省去遍历链表节点的时间，直接根据key获取到对应节点。

全局双链表：node有属性key。从双链表中选出淘汰结点时，map也需要删除对应节点，从而需要结点的key。

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
class LRUCache {
    int capacity;

    HashMap<Integer, Node> map = new HashMap<>();
    DList dList = new DList();

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

        public void setHead(Node m) {
            if (m != head.next) {
                remove(m);
                add(m);
            }
        }
    }

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }

    public int get(int key) {
        Node m = map.get(key);
        if (m == null) {
            return -1;
        } else {
            dList.setHead(m);
            return m.value;
        }
    }

    public void put(int key, int value) {
        Node m = map.get(key);
        if (m == null) {
            if (map.size() >= capacity) {
                // LRU淘汰就是末尾，直接从双链表中获取。
                Node last = dList.tail.pre;
                dList.remove(last);
                map.remove(last.key);
            }
            Node added = new Node(key, value);
            dList.add(added);
            map.put(key, added);
        } else {
            m.value = value;
            dList.setHead(m);
        }
    }
}
```


## LFU

hashmap + freqMap + 局部双链表

没有全局双链表了，而是 hashmap 存key对应的Node + freqMap 存freq对应的局部双链表。

从key获取hashmap的Node，再用node的freq获取freqMap的局部双链表。
```java
// 460. LFU 缓存
class LFUCache {
    int capacity;

    HashMap<Integer, Node> map = new HashMap<>();
    // 没有全局链表 DList dList = new DList(); 了，而是放在map中的局部链表。
    HashMap<Integer, DList> freqMap = new HashMap<>();

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
    }

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
                Node last = dList.tail.pre;
                if(last != dList.head){
                    dList.remove(last);
                }
                // Map也删除
                map.remove(last.key);
            }

            Node added = new Node(key, value);
            added.freq = 1;
            // map添加
            map.put(key, added);
            // freq添加
            DList dList = freqMap.getOrDefault(1, new DList());
            dList.add(added);
            freqMap.put(1, dList);
            // 最小频率是新增的1
            minFreq = 1;
        } else {
            update(m, value);
        }
    }

    public void update(Node m, Integer value){
        // freq删除老频率, 且确保空时加最小频率
        DList dList = freqMap.get(m.freq);
        dList.remove(m);
        
        if(dList.head.next == dList.tail && m.freq == minFreq){
            minFreq++;
        }

        // freq添加新频率
        if(value != null){
            m.value = value;
        }
        m.freq++;
        DList dList2 = freqMap.getOrDefault(m.freq, new DList());
        dList2.add(m);
        freqMap.put(m.freq, dList2);
    }
}
```