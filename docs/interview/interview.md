---
title: 面试题
date: '2021-06-06 21:05:10'
---

## 2021-04-06 字节一面

1. python 装饰器不用@怎么实现
2. 怎么实现一个 map
3. 怎么实现一个 FIFO 的队列 （链表、数组）
4. epoll
5. tcp/ip 三次握手
6. 并发锁 （自旋锁？） 死锁
7. 求平方根

## 2021-05-10 华为 od 一面

1. python 基础
2. 算法: 三数之和

## 2021-05-17 华为 od 二面

1. python 基础
2. 算法：[一次编辑](https://leetcode-cn.com/problems/one-away-lcci/)

## 2021-05-20 pdd 一面

1. java 基础
2. 数据库
3. 层序遍历二叉树

## 2021-05-27 滴滴 一面

1. java 基础
2. redis 数据结构 sds 实现
3. 算法：二分查找

## 2021-06-02 阿里 天猫好房 一面

1. java 基础
2. 线程池参数

## 2021-06-03 kyligence 一面

1. python 基础
2. java 基础

## 2021-6-4 同花顺 一面

1. java 基础
2. 项目介绍

## 2021-06-06 字节一面

1. java synchronized ReentrantLock
2. 缓存双删
3. B+ Tree 索引  表 id(主键索引)，age（普通索引） select *  where age <1索引过程
4. 三层 b+ tree 查询磁盘读取几次 (存在缓存 1 - 3 次)
5. sql 性能优化 用 缓存 消息队列等
6. b+ tree 散列表 索引区别
7. 算法: leetcode [122] 买卖股票的最佳时机 II

## 2021-06-07 坚果云 一面

1. 分布式部署
2. python 协程，web 框架
3. flask 上下文 g
4. redis 数据结构
5. python 用过什么新包、框架 (web, orm)
6. HTTP 2.0 特性
7. Explain 字段含义
8. sql

    数据库表 学生 id age

   - 查询某个年龄段，每个年龄的人数
   - 相同年龄人数大于 3 的年龄
   - 删除 id 重复的数据

9. 代码: 登录（一小时 3 次限制）

## 2021-06-07 bilibili 一面

1. 项目相关
2. 数据库事务
3. 隔离级别
4. sql 查询 关键词 执行顺序
5. 数据库缓存 ？
6. Java 容器
7. Java GC
8. 手写单例模式
9. Java 创建线程
10. 交替打印 abc 123 --- leetcode [1115] 交替打印FooBar
11. redis 快的原因
12. redis 持久化
13. redis 分布式锁 中间件相关

## 2021-06-07 奇安信 一面

1. python java 项目相关
2. 协程

## 2021-06-08 bilibili 二面

1. 项目相关
2. [950] 按递增顺序显示卡牌
3. [279] 完全平方数

哭死，一个不会

## 2021-06-08 坚果云 二面

1. 项目相关
2. 手写 LRU

## 2021-06-08 涂鸦智能 一面

1. java
2. jvm

直接 gg

## 2021-06-09 美团 一面

1. 翻转字符串
2. java 容器
3. java 线程创建方式
4. hashmap 结构
5. spring IOC AOP 原理
6. jvm 运行时数据区域
7. jvm 本地方法栈 是做什么的，体现的 java 什么特性？ 跨平台/可移植性
8. A a = new A() 存在 jvm 那个区域 (堆)
9. 死锁条件 - 互斥、占有等待、不可抢占、环路等待
10. 死锁恢复 - 鸵鸟策略、死锁检测和预防、死锁恢复、死锁避免
11. redis 持久化
12. redis 缓存穿透 缓存雪崩
13. 消息队列：好处 异步、削峰、解耦
14. Mysql 分库分表
15. redis 微信 token 缓存不一致 （设置一样的过期时间）
16. 单点登录的实现

## 2021-06-10 cityDo 一面

1. 项目介绍
2. spring 如何解决 bean 的循环依赖
3. 线程不安全，J.U.C - AQS 源码
4. synchronized ReentrantLock 比较
5. java 轻量级锁膨胀为重量级锁
6. Redis zset 跳跃表 查询过程
7. redis 分布式部署

## 2021-06-11 小黑鱼 一面

1. 项目介绍
2. python java 的区别
3. python 装饰器
4. python 类怎么重写构造函数添加功能
5. 平时写 python 用到了哪些设计模式
6. python 类的 静态方法、类方法、实例方法使用场景
7. python 传参 可变对象，不可变对象
8. 引用传递 复制数据

## 2021-06-12 cityDo 二面

1. 项目介绍
2. mvc 打开一个网页的全过程
3. 面向对象 面向过程 区别
4. 面向对象思想
5. Java 容器
6. spring springboot 区别
7. springboot 理解
8. 数据库持久层 mybatis
9. 缓存 消息队列 用在哪些地方
10. 分布式的理解

## 2021-06-16 bilibli 业务技术 一面

1. 项目介绍
2. 网关 限流 熔断 降级
3. redis 数据结构 使用场景
4. 跳表的实现，数据量大和小的时候分别适用什么数据结构(跳表，压缩列表)
5. redis 缓存一致性
6. mysql binlog, 利用 binlog 能做清缓存操作吗？
7. 用过那些消息队列，他们之间的对比
8. 消息队列顺序性
9. 消息队列可靠性
10. 消息队列重复消费

## 2021-06-16 乐言科技 一面

1. 项目介绍
2. Java 锁的理解
3. redis 淘汰策略
4. 实现 LRU
5. ConcurrentHashMap 锁的实现
6. Java NIO
7. 分布式系统 微服务
8. 判断链表是否有环

## 2021-06-16 网易雷火 一面

1. 项目介绍
2. python 框架 flask django
3. 进程 线程, 线程能访问的变量
4. multiprocess subprocess 的区别
5. GIL
6. 列表去重

## 2021-06-17 小黑鱼 java 一面

1. 项目介绍
2. 线程池的组成
3. 线程池队列的实现
4. ThreadLocal 的实现，线程安全，内存溢出
5. Gap lock：间隙锁 是读锁还是写锁
6. mysql 索引不走的情况
7. sql 查询 导致服务器 cpu 满载的情况

## 2021-06-17 阿里 java 电话不知道是不是正式

1. 项目介绍
2. 线程池
3. java 基础
4. 数组中查找指定数字（排序加二分）
5. 一个矩阵，有个机器人，从 0，0 开始 会有一些坐标是障碍物，求机器人经过3个点的最短路径， 入参：矩阵大小、 障碍物坐标、三个点坐标

## 2021-06-17 shopcider java 一面

1. 项目介绍
2. 排序
3. redis 一般用来做什么
4. 消息队列用来做什么
5. mysql 聚簇索引 辅助索引
6. explain 查看慢查询
7. 慢查询怎么处理

## 2021-06-17 滴滴 一面

1. 项目介绍
2. java oom 怎么定位
3. NIO
4. redis 数据结构
5. jdk 源码看过哪些
6. juc 锁
7. mysql 联合索引结构
8. 处理数据库慢查询
9. 大数相加

## 2021-06-18 阿里 一面

1. java 锁 synchronize ReentranLock
2. 线程池组成
3. 设计模式 单例模式 代理模式
4. spring 原理 IOC AOP
5. spring 事务 注解不同使用 @Tranactional
6. 怎么实现一个 aop 切面
7. 怎么使用事务
8. 大量数据找出重复的 URL

## 2021-06-18 脉脉 一面

1. 项目介绍
2. http 499 状态码
3. http 301 302 303 区别
4. redis 数据结构
5. leetcode [40] 组合总和 II
6. leetcode [63] 不同路径 II
7. 实现 m 天 n 次的流量检测
8. mysql 索引

## 2021-06-18 叽里呱啦 一面

1. 分段数字

    写一个函数：

    给定一个整数的list，例如 [404, 401, 403, 405, 407, 409, 408]，未排序

    输出，排序后的"分段数字":  [[401], [403, 405], [407, 409]]

    当一个数字前后没有连续数字时，用一元组表示，如[401]；

    当有连续数字出现时，用二元组表示“分段”，只需要首尾，如[403, 405]

    ```python
    def solution(nums):
        res = []
        n = len(nums)
        i = 0
        pre_num = float('inf')
        while i < n:
            for j in range(i+1, n):
                if nums[j] >= nums[i]:
                    continue
                nums[i], nums[j] = nums[j], nums[i]
            if not res or pre_num + 1 != nums[i]:
                res.append([nums[i]])
            else:
                res[-1] = [res[-1][0], nums[i]]
            pre_num = nums[i]
            i += 1
        return res


    nums = [404, 401, 403, 405, 407, 409, 408]
    print(solution(nums))

    ```

2. leetcode [958] 二叉树的完全性检验
3. ArrayList LinkedList 区别
4. redis 数据结构
5. mysql 事务
6. redis 事务和 mysql 事务的不同
7. mysql 索引
8. mq 重复消费 消息丢失
9. redis 保证扣库存不被重复修改（lua 脚本？）

## 2021-06-19 美团优选 二面

1. 项目介绍
2. 寻找重复数 时间 O(n) 空间 O(1)
3. 排序 O(n) 算法
4. java 锁
5. hashmap 实现
6. 线程池组成
7. jvm 结构 收集器
8. mysql 隔离级别 索引 高性能查询
9. 消息队列 作用 顺序性 可靠性
10. 消息队列组成

## 2021-06-21 脉脉 二面

1. 项目介绍
2. java python 的区别
3. 进程线程协程
4. redis 数据结构
5. 消息队列可靠性顺序性
6. url 输入后发生了什么
7. 如何设计一个秒杀系统

## 2021-06-22 哔哩哔哩 二面

1. 项目介绍
2. 计算机网络
3. TCP 保证可靠，一端程序被 kill 怎么保证可靠
4. 子进程
5. 僵尸进程
6. 浏览器为什么禁止跨域
7. 终端如何启动程序
8. 用 python 做一个 java 的 CI 要怎么做
9. 扑克牌排序
10. 找出素数

## 2021-06-22 货拉拉 一面

1. ArraryList 源码，怎么实现
2. Hashmap 源码怎么实现
3. 线程池 源码怎么实现
4. java 锁怎么实现
5. ConcurrentHashmap 源码怎么实现
6. 面试官建议我准备两份简历？ Python 一份 java 一份

## 2021-06-22 UCloud 一面

1. 项目介绍
2. 进程线程
3. 死锁
4. linux 命令
5. redis 数据结构 命令
6. Dockerfile RUN CMD ENTRYPOINT 区别 执行时机
7. 输入 URL 到页面展示的过程
8. 快排

## 2021-06-23 微软 一面

1. 字符串 indexof   abcd bc
2. restful api 匹配 /account/{account}/id/{id} /account/123/id/456

## 2021-06-23 阿里 二面

1. [leetcode 560] 和为 k 的子数组
2. redis
3. 消息队列

## 2021-06-24 shopcider 二面

1. 项目介绍
2. TCP 滑动窗口
3. TCP 报文
4. TCP 拥塞控制
5. 看过什么源码
6. spring 事务传播级别怎么实现
7. 数据库 binlog redolog undolog
8. pgsql mysql 差异
9. 链表翻转

## 2021-06-24 滴滴 二面

1. 项目介绍

## 2021-06-24 阿里 三面

1. 项目介绍
2. Write a function to return the length of the longest consecutive sequence in a tree
3. redis 设置成功了怎么保证持久化成功 (是坑，其实是问为什么不保证)

## 2021-06-25 紫光华智 一面

1. 项目介绍
2. 深拷贝浅拷贝
3. 雪花算法
4. 限流漏桶
5. 缓存穿透，缓存击穿

## 2021-06-25 哔哩哔哩 三面

1. 项目介绍

## 2021-06-28 微软 一轮

```python
# 1.	Given n integers {a1, a2, … an} and a target sum k.
# Find an integer sequence {b1, b2, … bn} such that
#     1)	bi <= ai
#     2)	b1 + b2 + … + bn = k
#     3)	Minimize max(bi)

# a[] = [2,1,5,6,2,3], k = 13
# b[] = [2,1,3,3,2,2] max(bi) = 3
# b[] = [2,1,4,4,2,3] max(bi) = 4

# *?

def solution(nums, k):
    # b = nums[:]
    delta = sum(nums) - k
    n = len(nums)
    if not nums or delta <= 0:
        return nums
    nums.sort()

    pre = 0
    high = 0
    for i in range(n):
        # 当前和
        cur = pre + nums[i] * (n - i)
        # print(pre, nums[i], (n - i), cur)
        if cur >= k:
            left = (k - pre) % (n - i)
            high = (k - pre) // (n - i)
            break
        # 前缀
        pre += nums[i]

    return high

print(solution([2,1,5,6,2,3], 16))
```

## 2021-06-28 微软 二轮

1. 求平方根
2. 合并用户
    给定一个列表 accounts，每个元素 accounts[i] 是一个字符串列表，其中第一个元素 accounts[i][0] 是 名称 (name)，其余元素是 emails 表示该账户的邮箱地址。

    现在，我们想合并这些账户。如果两个账户都有一些共同的邮箱地址，则两个账户必定属于同一个人。请注意，即使两个账户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。

    合并账户后，按以下格式返回账户：每个账户的第一个元素是名称，其余元素是按字符 ASCII 顺序排列的邮箱地址。账户本身可以以任意顺序返回。

```python
def solution(num):
    if num <= 0:
        return
    start = 0
    end = num
    while start < end:
        mid = (start + end) / 2
        temp = mid * mid
        if abs(temp - num) < 0.0001:
            return mid
        elif temp > num:
            end = mid
        else:
            start = mid


def solution2(num):
    if num < 1:
        return 1 / solution(1 / num)
    return solution(num)

# print(solution2(0.5))

# 给定一个列表 accounts，每个元素 accounts[i] 是一个字符串列表，其中第一个元素 accounts[i][0] 是 名称 (name)，其余元素是 emails 表示该账户的邮箱地址。

# 现在，我们想合并这些账户。如果两个账户都有一些共同的邮箱地址，则两个账户必定属于同一个人。请注意，即使两个账户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。

# 合并账户后，按以下格式返回账户：每个账户的第一个元素是名称，其余元素是按字符 ASCII 顺序排列的邮箱地址。账户本身可以以任意顺序返回。

from collections import defaultdict

def solution3(accounts):
    if not accounts:
        return accounts

    n = len(accounts)

    cache_map = defaultdict(list)

    for i in range(n):
        flag = True
        cur = set(accounts[i][1:])
        del_ids = []
        for j in cache_map:
            if cache_map[j] and cur & set(cache_map[j]):
                del_ids.append(j)
                flag = False
        if del_ids:
            master = del_ids[0]
            cache_map[master].extend(accounts[i][1:])
            for z in del_ids[1:]:
                cache_map[master].extend(cache_map[z])
                del cache_map[z]

        if flag:
            cache_map[i].extend(accounts[i][1:])

    return [
        [accounts[p][0], sorted(set(cache_map[p]))]
        for p in cache_map
    ]



print(solution3([
    ['John', 'a@com', 'b@com'],
    ['John', 'c@com', 'd@com'],
    ['John', 'b@com', 'c@com'],
    ['John1', 'e@com'],
    ['John2', 'b@com'],
    ['John3', 'b@com'],
]))
```

## 2021-06-28 微软 三轮

1. 系统之间认证
2. redis 缓存相关问题
3. 手写LRU
4. 最长递增子序列

```python
#  {10, 22, 9, 33, 21} -> {10, 22, 33}
# 打印最长递归子序列，符合一种序列即可

def solution(nums):
    if not nums:
        return 0

    n = len(nums)
    dp = [1] * n
    path = [[nums[i]] for i in range(n)]

    for i in range(n):
        for j in range(i):
            if nums[i] > nums[j] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                path[i] = path[j][:] + [nums[i]]
    return max(path, key=len)


print(solution([10, 22, 9, 33, 21]))

```

## 2021-06-28 微软 四轮

转换数字 如 六百一十三万五千五百五十五

```python
def solution(s):
    nums_map = {
        "一": 1,
        "二": 2,
        "三": 3,
        "四": 4,
        "五": 5,
        "六": 6,
    }
    cache_map = {
        "千": 1000,
        "百": 100,
        "十": 10
    }

    n = len(s)

    temp = 0
    cur_base = 1
    base_num = 1

    for i in range(n-1, -1, -1):
        item = s[i]
        if item in nums_map:
            temp += nums_map[item] * base_num * cur_base
        elif item in cache_map:
            base_num = cache_map[item]

        if item == "万":
            cur_base = 10000
            base_num = 1
        elif item == "亿":
            cur_base = 100000000
            base_num = 1

    return temp


print(solution("六百一十三万五千五百五十五"))
```
