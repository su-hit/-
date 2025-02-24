function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // 如果数组只有一个元素或为空，直接返回
    }

    const pivot = arr[arr.length - 1]; // 选择最后一个元素作为基准
    const left = []; // 存储小于基准的元素
    const right = []; // 存储大于基准的元素

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // 小于基准的元素放入左边数组
        } else {
            right.push(arr[i]); // 大于基准的元素放入右边数组
        }
    }

    // 递归排序左右两边，然后拼接结果
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 测试代码
const numbers = [34, 7, 23, 32, 5, 62, 12, 9, 45];
const sortedNumbers = quickSort(numbers);
console.log("Sorted array:", sortedNumbers);