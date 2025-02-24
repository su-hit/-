# 快速排序算法实现（Node.js）

## 项目简介
这是一个使用 Node.js 实现的快速排序算法示例。快速排序是一种高效的排序算法，通过分治法的思想，将数组划分为较小和较大的两部分，然后递归地对这两部分进行排序。

## 代码说明

### 功能
- **`quickSort(arr)`**：对输入数组进行快速排序。
  - 如果数组长度小于等于1，直接返回数组。
  - 选择数组的最后一个元素作为基准（pivot）。
  - 将数组分为小于基准的 `left` 部分和大于基准的 `right` 部分。
  - 递归地对 `left` 和 `right` 进行排序，并将结果拼接。

### 示例代码
```javascript
const numbers = [34, 7, 23, 32, 5, 62, 12, 9, 45];
const sortedNumbers = quickSort(numbers);
console.log("Sorted array:", sortedNumbers);
```

### 输出示例
```plaintext
Sorted array: [5, 7, 9, 12, 23, 32, 34, 45, 62]
```
