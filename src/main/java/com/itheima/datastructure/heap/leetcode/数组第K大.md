- [215](#215)
  - [手大顶堆](#手大顶堆)
  - [小顶堆](#小顶堆)
    - [手小顶堆](#手小顶堆)
    - [PriorityQueue](#priorityqueue)
- [703](#703)

---
# 703

```java
class KthLargest {
    PriorityQueue<Integer> q = new PriorityQueue<>();
    int k;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        for (int n : nums) {
            q.add(n);
            if (q.size() > k) {
                q.poll();
            }
        }
    }

    public int add(int val) {
        q.add(val);
        if (q.size() > k) {
            q.poll();
        }
        return q.peek();
    }
}
```