---
title: Redis 6.0 源码——SDS
date: '2021-06-02 20:46:39'
---

[原文](https://doocs.github.io/source-code-hunter/#/docs/Redis/redis-sds)

SDS（Simple Dynamic Strings, 简单动态字符串）是 Redis 的一种基本数据结构，主要是用于存储字符串和整数

## 前置思考

我们首先考虑一个问题，如何实现一个二进制安全的字符串？

在 C 语言中，`\0` 表示字符串结束，如果字符串中本身就包含 `\0` 字符，那么字符串就会在 `\0` 处被截断，即非二进制安全；若通过使用一个 len 属性，来判断字符串是否结束，就可以保证读写字符串时不受到 `\0` 的影响，则是二进制安全。同时 `len` 属性也能保证在 `O(1)` 时间内获取字符串的长度。

## Redis 3.2 以前的 SDS 实现

在 Redis 3.2 版本以前，SDS 的结构如下：

```c
struct sdshdr {
    unsigned int len;
    unsigned int free;
    char buf[];
};
```

- 其中，buf 表示数据空间，用于存储字符串
- len 表示 buf 中已占用的字节数，也即字符串长度
- free 表示 buf 中剩余可用字节数。

字段 len 和 free 各占 4 字节，紧接着存放字符串。

这样做有以下几个好处：

- 用单独的变量 len 和 free，可以方便地获取字符串长度和剩余空间；
- 内容存储在动态数组 buf 中，SDS 对上层暴露的指针指向 buf，而不是指向结构体 SDS。因此，上层可以像读取 C 字符串一样读取 SDS 的内容，兼容 C 语言处理字符串的各种函数，同时也能通过 buf 地址的偏移，方便地获取其他变量；
- 读写字符串不依赖于 \0，保证二进制安全。

但其实以上的设计是存在一些问题的，对于不同长度的字符串，是否有必要使用 len 和 free 这 2 个 4 字节的变量？4 字节的 len，可表示的字符串长度为 2^32，而在实际应用中，存放于 Redis 中的字符串往往没有这么长，因此，空间的使用上能否进一步压缩？

那么接下来，我们就来看看最新的 Redis 是如何根据字符串的长度，使用不同的数据结构进行存储的

### Redis SDS 最新实现

在 Redis 3.2 版本之后（v3.2 - v6.0），Redis 将 SDS 划分为 5 种类型：

- sdshdr5：长度小于 1 字节
- sdshdr8：长度 1 字节
- sdshdr16：长度 2 字节
- sdshdr32：长度 4 字节
- sdshdr64：长度 8 字节

Redis 增加了一个 flags 字段来标识类型，用一个字节(8 位)来存储。

其中：前 3 位表示字符串的类型；剩余 5 位存储长度，可以用来存储长度小于 32 的短字符串。

```c
struct __attribute__ ((__packed__)) sdshdr5 {
    unsigned char flags; /* 前3位存储类型，后5位存储长度 */
    char buf[]; /* 动态数组，存放字符串 */
};
```

而对于长度大于 31 的字符串，仅仅靠 flags 的后 5 位来存储长度明显是不够的，需要用另外的变量来存储。sdshdr8、sdshdr16、sdshdr32、sdshdr64 的数据结构定义如下，其中 len 表示已使用的长度，alloc 表示总长度，buf 存储实际内容，而 flags 的前 3 位依然存储类型，后 5 位则预留。

```c
struct __attribute__ ((__packed__)) sdshdr8 {
    uint8_t len; /* 已使用长度，1字节 */
    uint8_t alloc; /* 总长度，1字节 */
    unsigned char flags; /* 前3位存储类型，后5位预留 */
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr16 {
    uint16_t len; /* 已使用长度，2字节 */
    uint16_t alloc; /* 总长度，2字节 */
    unsigned char flags; /* 前3位存储类型，后5位预留 */
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr32 {
    uint32_t len; /* 已使用长度，4字节 */
    uint32_t alloc; /* 总长度，4字节 */
    unsigned char flags; /* 前3位存储类型，后5位预留 */
    char buf[];
};
struct __attribute__ ((__packed__)) sdshdr64 {
    uint64_t len; /* 已使用长度，8字节 */
    uint64_t alloc; /* 总长度，8字节 */
    unsigned char flags; /* 前3位存储类型，后5位预留 */
    char buf[];
};
```

注意，一般情况下，结构体会按照所有变量大小的最小公倍数做字节对齐，而用 packed 修饰后，结构体则变为 1 字节对齐。这样做的好处有二：一是节省内存，比如 sdshdr32 可节约 3 个字节；二是 SDS 返回给上层的是指向 buf 的指针，此时按 1 字节对齐，所以可在创建 SDS 后，通过 (char*)sh+hdrlen 得到 buf 指针地址，也可以通过 buf[-1] 找到 flags。
