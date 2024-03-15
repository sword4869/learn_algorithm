- [215](#215)
  - [手大顶堆](#手大顶堆)
  - [小顶堆](#小顶堆)
    - [手小顶堆](#手小顶堆)
    - [PriorityQueue](#priorityqueue)
- [703](#703)

---
# 215
## 手大顶堆

弹出k-1个。堆顶即为topk

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int size = nums.length;
        buildMaxHeap(nums, size);
        for (int i = nums.length - 1; i >= nums.length - k + 1;i--) {
            swap(nums, 0, i);
            size--;
            maxHeapify(nums, 0, size);
        }
        return nums[0];
    }

    public void buildMaxHeap(int[] arr, int size) {
        for (int i = size / 2 - 1; i >= 0; i--) {
            maxHeapify(arr, i, size);
        }
    }

    public void maxHeapify(int[] arr, int parent, int size) {
        int left = parent * 2 + 1, right = left + 1, max = parent;
        if (left < size) {
            max = arr[max] > arr[left] ? max : left;
        }
        if (right < size) {
            max = arr[max] > arr[right] ? max : right;
        }
        if (max != parent) {
            swap(arr, parent, max);
            maxHeapify(arr, max, size);
        }
    }

    public void swap(int[] arr, int i, int j) {
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}
```

## 小顶堆

虽然小顶堆+弹出n-k个，但换一种省内存的做法：
- 添加k个元素。
- 如果大于堆顶，替换堆顶重新下潜（堆大小不变）。
- 堆顶即topK。

### 手小顶堆

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int size = k;
        buildMinHeap(nums, k);
        
        for(int i = k; i < nums.length; i ++){
            if(nums[i] > nums[0]){
                nums[0] = nums[i];
                minHeapify(nums, 0, size);
            }
        }
        return nums[0];
    }

    public void buildMinHeap(int[] arr, int size) {
        for (int i = size / 2 - 1; i >= 0; i--) {
            minHeapify(arr, i, size);
        }
    }

    public void minHeapify(int[] arr, int parent, int size) {
        int left = parent * 2 + 1, right = left + 1, min = parent;
        if (left < size) {
            min = arr[min] < arr[left] ? min : left;
        }
        if (right < size) {
            min = arr[min] < arr[right] ? min : right;
        }
        if (min != parent) {
            swap(arr, parent, min);
            minHeapify(arr, min, size);
        }
    }

    public void swap(int[] arr, int i, int j) {
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}
```

### PriorityQueue

- 使用优先级队列，队列头是最小的元素。
- 添加后，我们限制队列的数量为k，那么topK就是队头。
```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> q = new PriorityQueue<>();
        for(int i = 0 ; i < nums.length; i ++){
            q.add(nums[i]);
            if(q.size() > k){
                q.poll();
            }
        }
        return q.peek();
    }
}
```

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