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
