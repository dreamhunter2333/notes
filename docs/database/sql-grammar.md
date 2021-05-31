---
title: SQL 语法
date: '2021-05-24 15:37:19'
---

## 一、基础

模式定义了数据如何存储、存储什么样的数据以及数据如何分解等信息，数据库和表都有模式

主键的值不允许修改，也不允许复用（不能将已经删除的主键值赋给新数据行的主键）

`SQL`（Structured Query Language)，标准 `SQL` 由 ANSI 标准委员会管理，从而称为 ANSI SQL。各个 DBMS 都有自己的实现，如 PL/SQL、Transact-SQL 等

`SQL` 语句不区分大小写，但是数据库表名、列名和值是否区分依赖于具体的 DBMS 以及配置。

`SQL` 支持以下三种注释：

```sql
## 注释
SELECT *
FROM mytable; -- 注释
/* 注释1
   注释2 */
```

数据库创建与使用：

```sql
CREATE DATABASE test;
USE test;
```

## 二、创建表

```sql
CREATE TABLE mytable (
  # int 类型，不为空，自增
  id INT NOT NULL AUTO_INCREMENT,
  # int 类型，不可为空，默认值为 1，不为空
  col1 INT NOT NULL DEFAULT 1,
  # 变长字符串类型，最长为 45 个字符，可以为空
  col2 VARCHAR(45) NULL,
  # 日期类型，可为空
  col3 DATE NULL,
  # 设置主键为 id
  PRIMARY KEY (`id`));
```

## 三、修改表

添加列

```sql
ALTER TABLE mytable
ADD col CHAR(20);
```

删除列

```sql
ALTER TABLE mytable
DROP COLUMN col;
```

删除表

```sql
DROP TABLE mytable;
```

## 四、插入

普通插入

```sql
INSERT INTO mytable(col1, col2)
VALUES(val1, val2);
```

插入检索出来的数据

```sql
INSERT INTO mytable1(col1, col2)
SELECT col1, col2
FROM mytable2;
```

将一个表的内容插入到一个新表

```sql
CREATE TABLE newtable AS
SELECT * FROM mytable;
```

## 五、更新

```sql
UPDATE mytable
SET col = val
WHERE id = 1;
```

## 六、删除

```sql
DELETE FROM mytable
WHERE id = 1;
```

`TRUNCATE TABLE` 可以清空表，也就是删除所有行。

```sql
TRUNCATE TABLE mytable;
```

使用更新和删除操作时一定要用 WHERE 子句，不然会把整张表的数据都破坏。可以先用 SELECT 语句进行测试，防止错误删除

## 七、查询

DISTINCT

相同值只会出现一次。它作用于所有列，也就是说所有列的值都相同才算相同。

```sql
SELECT DISTINCT col1, col2
FROM mytable;
```

LIMIT

限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。

返回前 5 行：

```sql
SELECT *
FROM mytable
LIMIT 5;
```

```sql
SELECT *
FROM mytable
LIMIT 0, 5;
```

返回第 3 ~ 5 行：

```sql
SELECT *
FROM mytable
LIMIT 2, 3;
```

## 八、排序

- ASC ：升序（默认）
- DESC ：降序

可以按多个列进行排序，并且为每个列指定不同的排序方式：

```sql
SELECT *
FROM mytable
ORDER BY col1 DESC, col2 ASC;
```

## 九、过滤

不进行过滤的数据非常大，导致通过网络传输了多余的数据，从而浪费了网络带宽。因此尽量使用 SQL 语句来过滤不必要的数据，而不是传输所有的数据到客户端中然后由客户端进行过滤。

```sql
SELECT *
FROM mytable
WHERE col IS NULL;
```

下表显示了 WHERE 子句可用的操作符

操作符|说明
-----|---
=|等于
<|小于
\>|大于
<> !=|不等于
<= !>|小于等于
\>= !<|大于等于
BETWEEN|在两个值之间
IS NULL|为 NULL 值

应该注意到，`NULL` 与 0、空字符串都不同。

`AND` 和 `OR` 用于连接多个过滤条件。优先处理 `AND`，当一个过滤表达式涉及到多个 AND 和 OR 时，可以使用 () 来决定优先级，使得优先级关系更清晰。

`IN` 操作符用于匹配一组值，其后也可以接一个 SELECT 子句，从而匹配子查询得到的一组值。

`NOT` 操作符用于否定一个条件。

## 十、通配符

通配符也是用在过滤语句中，但它只能用于文本字段。

- `%` 匹配 `>=0` 个任意字符；
- `_` 匹配 `==1` 个任意字符；
- `[ ]` 可以匹配集合内的字符，例如 [ab] 将匹配字符 a 或者 b。用脱字符 ^ 可以对其进行否定，也就是不匹配集合内的字符。

使用 Like 来进行通配符匹配。

```sql
SELECT *
FROM mytable
WHERE col LIKE '[^AB]%'; -- 不以 A 和 B 开头的任意文本
```

不要滥用通配符，通配符位于开头处匹配会非常慢

## 十一、计算字段

在数据库服务器上完成数据的转换和格式化的工作往往比客户端上快得多，并且转换和格式化后的数据量更少的话可以减少网络通信量。

计算字段通常需要使用 AS 来取别名，否则输出的时候字段名为计算表达式。

```sql
SELECT col1 * col2 AS alias
FROM mytable;
```

`CONCAT()` 用于连接两个字段。许多数据库会使用空格把一个值填充为列宽，因此连接的结果会出现一些不必要的空格，使用 `TRIM()` 可以去除首尾空格。

```sql
SELECT CONCAT(TRIM(col1), '(', TRIM(col2), ')') AS concat_col
FROM mytable;
```

## 十二、函数

各个 DBMS 的函数都是不相同的，因此不可移植，以下主要是 MySQL 的函数。

汇总

函 数|说 明
-----|----
AVG()|返回某列的平均值
COUNT()|返回某列的行数
MAX()|返回某列的最大值
MIN()|返回某列的最小值
SUM()|返回某列值之和

`AVG()` 会忽略 NULL 行

使用 `DISTINCT` 可以汇总不同的值。

```sql
SELECT AVG(DISTINCT col1) AS avg_col
FROM mytable;
```

 文本处理

函数|说明
-----|----
LEFT()|左边的字符
RIGHT()|右边的字符
LOWER()|转换为小写字符
UPPER()|转换为大写字符
LTRIM()|去除左边的空格
RTRIM()|去除右边的空格
LENGTH()|长度
SOUNDEX()|转换为语音值

其中，`SOUNDEX()` 可以将一个字符串转换为描述其语音表示的字母数字模式。

```sql
SELECT *
FROM mytable
WHERE SOUNDEX(col1) = SOUNDEX('apple')
```

日期和时间处理

日期格式：`YYYY-MM-DD`
时间格式：`HH:MM:SS`

函 数|说 明
-----|----
ADDDATE()|增加一个日期（天、周等）
ADDTIME()|增加一个时间（时、分等）
CURDATE()|返回当前日期
CURTIME()|返回当前时间
DATE()|返回日期时间的日期部分
DATEDIFF()|计算两个日期之差
DATE_ADD()|高度灵活的日期运算函数
DATE_FORMAT()|返回一个格式化的日期或时间串
DAY()|返回一个日期的天数部分
DAYOFWEEK()|对于一个日期，返回对应的星期几
HOUR()|返回一个时间的小时部分
MINUTE()|返回一个时间的分钟部分
MONTH()|返回一个日期的月份部分
NOW()|返回当前日期和时间
SECOND()|返回一个时间的秒部分
TIME()|返回一个日期时间的时间部分
YEAR()|返回一个日期的年份部分

```sql
mysql> SELECT NOW();
2018-4-14 20:25:11
```

数值处理

函数|说明
-----|----
SIN()|正弦
COS()|余弦
TAN()|正切
ABS()|绝对值
SQRT()|平方根
MOD()|余数
EXP()|指数
PI()|圆周率
RAND()|随机数

## 十三、分组

把具有相同的数据值的行放在同一组中。

可以对同一分组数据使用汇总函数进行处理，例如求分组数据的平均值等。

指定的分组字段除了能按该字段进行分组，也会自动按该字段进行排序。

```sql
SELECT col, COUNT(*) AS num
FROM mytable
GROUP BY col;
```

`GROUP BY` 自动按分组字段进行排序，`ORDER BY` 也可以按汇总字段来进行排序。

```sql
SELECT col, COUNT(*) AS num
FROM mytable
GROUP BY col
ORDER BY num;
```

`WHERE` 过滤行，`HAVING` 过滤分组，行过滤应当先于分组过滤。

```sql
SELECT col, COUNT(*) AS num
FROM mytable
WHERE col > 2
GROUP BY col
HAVING num >= 2;
```

分组规定：

`GROUP BY` 子句出现在 `WHERE` 子句之后，`ORDER BY` 子句之前；
除了汇总字段外，`SELECT` 语句中的每一字段都必须在 `GROUP BY` 子句中给出；
NULL 的行会单独分为一组；

大多数 SQL 实现不支持 GROUP BY 列具有可变长度的数据类型
