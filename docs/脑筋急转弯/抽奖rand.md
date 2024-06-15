>  总共有30万个员工，工卡号码从1到30万。 我们需要随机选择10万个员工来发放奖品。 rand() 函数能够生成整数范围在 (0, 65535]，我们可以用它来生成一个随机的索引，然后映射到员工的工卡号码上。



计算映射后的员工工卡号码： `employee_id = r * 5 + rand() % 5 + 1`。

- 使用 `rand()` 函数生成一个随机数 `r`，范围在 (0, 65535]

- 这里 `r * 5` 确保覆盖到30万的范围。
- `rand() % 5 + 1` 用来选择对应的 `r` 在 5 个可能值中的一个。

使用一个哈希集合来记录已经选中的员工工卡号码，以避免重复选取。

```python
function fairLottery():
    selectedEmployees = array of size 100,000
    selectedSet = empty hash set

    while selectedEmployees.length < 100,000:
        r = rand() % 65535 + 1
        employee_id = r * 5 + rand() % 5 + 1
        
        if employee_id <= 300,000 and employee_id not in selectedSet:
            selectedSet.add(employee_id)
            selectedEmployees.append(employee_id)
    
    return selectedEmployees
```



PS：基本思路就是 [470. 用 Rand7() 实现 Rand10().md](..\题\leetcode\470. 用 Rand7() 实现 Rand10().md) 