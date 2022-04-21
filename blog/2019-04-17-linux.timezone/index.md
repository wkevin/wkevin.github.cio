---
title: Linux 中的时区
date: 2019-04-17 17:06:09 +0800
description: " "
authors: wKevin
categories:
  - it
tags:
  - timezone
---

Linux 要正确显示时间需要配置几样：

- 时间：可以手工设置，也可以配置 NTP 自动获取
- 时区：只能手工配置，一般装机时就配好了，后期也能修改

## 查看时区

查看时间：

```
~$ date
2019年 04月 17日 星期三 17:09:39 CST
```

<!--truncate-->

其中包含了时区的信息：CST，但不幸的是时区名缩写有重复，有 4 个时区可以用 CST 缩写：

- Central Standard Time (USA) UT -6:00
- Central Standard Time (Australia) UT+9:30
- China Standard Time UT+8:00
- Cuba Standard Time UT-4:00

有些缩写就一目了然：

- GMT：格林威治时间
- UTC：Coordinated Universal Time，与 GMT 有微小差别

还好有这样的格式

```
~$ date -R
Wed, 17 Apr 2019 17:14:18 +0800
```

显示出了时区的数字形式，组合上述 2 个方式，我的电脑就是： **CST +0800**

从下面命令再次印证：

```
~$ date +"%Z %z"
CST +0800
```

`%Z` 是时区的名称， `%z` 是时区的数字形式。

所以，在时间表达上，**12:00 UTC+0 == 20:00 CST+8** 是同一宇宙时间，是同时发生的。

## 设置时区

- 装机时图形化选择
- `tzselect` 命令行选择
- `sudo ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`

`/usr/share/zoneinfo` 下包含了 Linux 可以认识的时区，把他们 cp 或 ln 到 `/etc/localtime` 即可完成设置。

```
~$ ls /usr/share/zoneinfo
Africa      Cuba     GMT0         Japan              Pacific     Turkey
America     EET      GMT-0        Kwajalein          Poland      UCT
Antarctica  Egypt    GMT+0        leap-seconds.list  Portugal    Universal
Arctic      Eire     Greenwich    Libya              posix       US
Asia        EST      Hongkong     localtime          posixrules  UTC
Atlantic    EST5EDT  HST          MET                PRC         WET
Australia   Etc      Iceland      Mexico             PST8PDT     W-SU
Brazil      Europe   Indian       MST                right       zone1970.tab
Canada      Factory  Iran         MST7MDT            ROC         zone.tab
CET         GB       iso3166.tab  Navajo             ROK         Zulu
Chile       GB-Eire  Israel       NZ                 Singapore
CST6CDT     GMT      Jamaica      NZ-CHAT            SystemV
```

```
~$ ls /usr/share/zoneinfo/Asia
Aden        Chongqing    Jerusalem     Novokuznetsk   Tashkent
Almaty      Chungking    Kabul         Novosibirsk    Tbilisi
Amman       Colombo      Kamchatka     Omsk           Tehran
Anadyr      Dacca        Karachi       Oral           Tel_Aviv
……
```

## 转换时间

zdump 命令类似酒店大堂里的一排钟表，让你立即直到另一个时区的时间，比如：

```
~$ zdump Japan
Japan  Wed Apr 17 18:23:55 2019 JST
```

但 zdump 命令的使用中需要注意几个细节：

| 正确                  | 错误                  | 原因                                                                    |
| --------------------- | --------------------- | ----------------------------------------------------------------------- |
| `zdump PRC`           | `zdump China`         | /usr/share/zoneinfo/ 下没有 China，会给出 UTC                           |
| `zdump Asia/Shanghai` | `zdump Shanghai`      | 因为要加上 /usr/share/zoneinfo/ 下的路径                                |
| `zdump Hongkong`      | `zdump Asia/Hongkong` | 因为 Hongkong、PRC、Japan 等一批 不在 Asia 目录下，在 zoneinfo 根目录下 |
| `zdump Hongkong`      | `zdump HongKong`      | 因为区分大小写，K 字大写了，时区名称都是只有首字母大写                  |
