---
title: 算法 - 排序
date: '2021-06-05 12:26:40'
---

# 算法 - 排序

## 选择排序

```python
def sort(num_list):
    nums_len = len(num_list)
    for i in range(nums_len - 1):
        min_index = i
        for j in range(i, nums_len):
            if num_list[min_index] > num_list[j]:
                min_index = j
        num_list[min_index], num_list[i] = num_list[i], num_list[min_index]
    return num_list
```

## 冒泡排序

```python
def sort(num_list):
    nums_len = len(num_list)
    for i in reversed(range(nums_len)):
        for j in range(i):
            if num_list[j] > num_list[j + 1]:
                num_list[j+1], num_list[j] = num_list[j], num_list[j+1]
    return num_list
```

## 插入排序

```python
def sort(num_list):
    num_len = len(num_list)

    for cur_i in range(1, num_len):
        # 取后半部分第一个
        cur_num = num_list[cur_i]

        # 遍历前半部分序列插入
        j = cur_i - 1
        while j >= 0 and num_list[j] > cur_num:
            num_list[j+1] = num_list[j]
            j -= 1
        num_list[j+1] = cur_num

    return num_list
```

## 希尔排序

```python
def sort(num_list):
    num_len = len(num_list)
    gap = int(num_len / 2)

    while gap > 0:
        for cur_i in range(gap, num_len):
            # 取后半部分第一个
            cur_num = num_list[cur_i]

            # 遍历前半部分序列插入
            j = cur_i - gap
            while j >= 0 and num_list[j] > cur_num:
                num_list[j+gap] = num_list[j]
                j -= gap
            num_list[j+gap] = cur_num

        gap = int(gap / 2)

    return num_list
```

## 归并排序

```python
def merge(num_list, left, mid, right):
    print(left, mid+1, right+1)
    left_nums = num_list[left:mid+1]
    right_nums = num_list[mid+1:right+1]
    i = 0
    j = 0
    while i < len(left_nums) and j < len(right_nums):
        if left_nums[i] <= right_nums[j]:
            num_list[left] = left_nums[i]
            i += 1
        else:
            num_list[left] = right_nums[j]
            j += 1
        left += 1

    for n in (left_nums[i:] + right_nums[j:]):
        num_list[left] = n
        left += 1


# "归并排序 - 递归"
def sort(num_list: List[int]) -> List:
    def merge_sort(left, right):
        if left >= right:
            return
        mid = int((left + right) / 2)
        merge_sort(left, mid)
        merge_sort(mid+1, right)
        merge(num_list, left, mid, right)

    merge_sort(0, len(num_list)-1)
    return num_list


# "归并排序 - 迭代"
def sort2(num_list: List[int]) -> List:
    nums_len = len(num_list)
    i = 1
    while i < nums_len:
        for j in range(0, nums_len, 2 * i):
            right = min(j + 2 * i - 1, nums_len - 1)
            mid = j + i - 1
            merge(num_list, j, mid, right)
        i = 2 * i
    return num_list
```

## 快速排序

```python
def sort(num_list: List[int]) -> List:
    def quick_sort(left, right):
        if left >= right:
            return
        pivot = num_list[left]
        # 左右分片
        i = left + 1
        j = right
        while True:
            while True:
                if num_list[i] <= pivot and i != right:
                    i += 1
                else:
                    break
            while True:
                if num_list[j] > pivot and j != left:
                    j -= 1
                else:
                    break

            if i >= j:
                break

            num_list[i], num_list[j] = num_list[j], num_list[i]

        num_list[left], num_list[j] = num_list[j], num_list[left]

        quick_sort(left, j - 1)
        quick_sort(j + 1, right)

    quick_sort(0, len(num_list) - 1)

    return num_list
```
