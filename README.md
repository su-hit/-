快速排序算法实现（Node.js）
项目简介
这是一个使用 Node.js 实现的快速排序算法示例。快速排序是一种高效的排序算法，通过分治法的思想，将数组划分为较小和较大的两部分，然后递归地对这两部分进行排序。
使用方法
安装
确保你已经安装了 Node.js。
将代码保存到一个文件中，例如 quickSort.js。
运行
在终端中运行以下命令：
bash
复制
node quickSort.js
输入输出
输入：代码中定义了一个示例数组 [34, 7, 23, 32, 5, 62, 12, 9, 45]。
输出：排序后的数组将打印到控制台。
代码说明
功能
quickSort(arr)：对输入数组进行快速排序。
如果数组长度小于等于1，直接返回数组。
选择数组的最后一个元素作为基准（pivot）。
将数组分为小于基准的 left 部分和大于基准的 right 部分。
递归地对 left 和 right 进行排序，并将结果拼接。
示例代码
JavaScript
复制
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const numbers = [34, 7, 23, 32, 5, 62, 12, 9, 45];
const sortedNumbers = quickSort(numbers);
console.log("Sorted array:", sortedNumbers);
输出示例
plaintext
复制
Sorted array: [5, 7, 9, 12, 23, 32, 34, 45, 62]
性能优化建议
快速排序的性能依赖于基准的选择。以下是优化建议：
随机选择基准：通过随机选择基准来避免最坏情况。
三数取中法：选择数组的第一个、中间和最后一个元素的中值作为基准。
示例：随机选择基准
修改代码以随机选择基准：
JavaScript
复制
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
扩展功能
用户输入：修改代码以支持从命令行或文件读取输入数组。
性能测试：添加代码以测试算法的运行时间和比较次数。
贡献
欢迎提交 PR 或 Issue 来改进代码或文档。
希望这个 README.md 能帮助你更好地理解和使用快速排序代码！
