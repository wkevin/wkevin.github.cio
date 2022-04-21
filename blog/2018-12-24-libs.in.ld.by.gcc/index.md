---
title: "找不到依赖库可咋整"
date: 2018-12-24 18:16:04 +0800
description: 运行可执行程序或加载动态库时找不到依赖库的解决办法
authors: wKevin
categories:
  - it
tags:
  - ldd
  - LD_LIBRARY_PATH
---

> 摘要：  
> 使用 ldd 查询依赖库；  
> 使用 readelf 查询 rpath；  
> 使用 ln-s、LD_LIBRARY_PATH、-WL,-rpath 解决问题。

# 现象

gcc 编译好了，执行过程中不免会遇到这种场景：

```
kevin@:cpp$ ./drawing.bin
./drawing.bin: error while loading shared libraries: libopencv_core.so.3.4: cannot open shared object file: No such file or directory
```

找不到依赖的 .so 文件，linux 提供了 ldd 命令可以查看：

```
kevin@:cpp$ ldd drawing.bin
        linux-vdso.so.1 =>  (0x00007ffe7ff2b000)
        libopencv_core.so.3.4 => not found
        libopencv_highgui.so.3.4 => not found
        libopencv_imgproc.so.3.4 => not found
        libstdc++.so.6 => /usr/lib/x86_64-linux-gnu/libstdc++.so.6 (0x00007fe6540c2000)
        libgcc_s.so.1 => /lib/x86_64-linux-gnu/libgcc_s.so.1 (0x00007fe653eac000)
        libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007fe653ae2000)
```

能找到的列出来，找不到的写 **not found**，很好。

弄一个正常的看看：

```
kevin@:2_图像显示$ ldd ShowImage.bin
        linux-vdso.so.1 =>  (0x00007ffdf0aa3000)
        libopencv_core.so.4.0 => /home/kevin/opencv/installation/OpenCV-4.0.0/lib/libopencv_core.so.4.0 (0x00007ffb45137000)
        此处略去100行……
```

差别很明显了，drawing.bin 和 ShowImage.bin 所依赖的 so 文件一个找不到，一个 OK —— 如何造成？怎么解决？

# 成因

## rpath

gcc 在编译和链接的过程中，可以送入这样一个参数：`-Wl, -rpath=<my_lib_path>`

- `-Wl`: 表示编译器将后面的参数传递给链接器 ld
- `-rpath`: `man ld` 可以查看 ld 拿到这个参数干什么
  - 链接时定位动态库
  - 写入编译出的二进制文件（elf 文件），给加载运行时使用

可以使用 readelf 命令从编译出的二进制文件中读出这个配置：

不能运行的第一个例子：

```
kevin@:cpp$ readelf -a -u drawing.bin|grep rpath
 0x000000000000000f (RPATH)              Library rpath: [/opt/opencv/lib]
```

指向的 `/opt/opencv/lib` 下未能找到所需的 .so 文件。

能运行的第二个例子：

```
kevin@:2_图像显示$ readelf -a 2_ShowImage-4.0.0.bin |grep rpath
 0x000000000000000f (RPATH)              Library rpath: [ /home/kevin/opencv/installation/OpenCV-4.0.0/lib]
```

从这里我们可以看到程序的开发者是如何考量这个问题的：

- 需要程序具有通用性，拷贝到不同的电脑都可以运行，则需要指定一个通用的路径，或不指定 rpath
- 不需通用性，尤其是开发者自己调试过程中，可以指定一个特殊的、或过程的版本

除了 rpath，运行程序时还会在哪些路径搜索库文件呢？

## ld 的搜索路径

ld 是 linux 下的链接器和加载器，其实 ld 是个 shell 的可执行命令，它本身依赖和使用的是 **ld-linux.so**，而它是静态链接的。

```
kevin@:cpp$ which ld
/usr/bin/ld
kevin@:cpp$ ldd `which ld`
        linux-vdso.so.1 =>  (0x00007fffb8dde000)
        libbfd-2.26.1-system.so => /usr/lib/x86_64-linux-gnu/libbfd-2.26.1-system.so (0x00007f8245ce5000)
        libdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007f8245ae1000)
        libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f8245717000)
        libz.so.1 => /lib/x86_64-linux-gnu/libz.so.1 (0x00007f82454fd000)
        /lib64/ld-linux-x86-64.so.2 (0x00007f824602a000)
kevin@:cpp$ ldd  /lib64/ld-linux-x86-64.so.2
        statically linked
```

使用 `man ld` 在 rpath 章节中可以找到，ld 在加载一个 elf 文件时，寻找依赖库（libs）是有优先级顺序的，一旦找到，则退出寻找。顺序如下：

1. elf 头中自带的 rpath-link 或 rpath 变量
   - rpath-link 对可执行文件无效
2. 环境变量 `LD_RUN_PATH`、`LD_LIBRARY_PATH`、`-L`（macOS）
3. 默认路径：`/lib` 和 `/usr/lib`
4. 根据 `/etc/ld.so.conf` 中指定的路径，比如我本机有这些：
   1. `/lib/x86_64-linux-gnu`
   2. `/usr/lib/x86_64-linux-gnu`
   3. `/usr/lib/x86_64-linux-gnu/mesa-egl`
   4. `/usr/lib/x86_64-linux-gnu/mesa`
   5. `/usr/local/lib`

# 解决

理解了 ld 的工作原理，解决方法就浮出水面：

## 1. 用户级方案

### 1.1 ln -s

在 `/lib` 或 `/usr/lib` 下创建软链接，问题是 lib 一多就麻烦了，单个还能玩一玩。

```
kevin@:~$ ln -s /home/kevin/opencv/installation/OpenCV-3.4.4/lib/libopencv_core.so.3.4 /usr/lib/
```

### 1.2 LD_LIBRARY_PATH

#### 1.2.1 临时方案：

运行前先设置一下环境变量

```
kevin@:cpp$ export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/kevin/opencv/installation/OpenCV-3.4.4/lib
kevin@:cpp$ ./drawing.bin
This program demonstrates OpenCV drawing and text output functions.
Usage:
   ./drawing
```

#### 1.2.2 永久方案

```
kevin@cpp$ echo "export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/kevin/opencv/installation/OpenCV-3.4.4/lib" >> ~/.bashrc
kevin@cpp$ source ~/.bashrc
```

### 1.3 增加 conf

```
kevin@:~$ tourch /etc/ld.so.conf.d/opencv.conf
kevin@:~$ echo "/home/kevin/opencv/installation/OpenCV-3.4.4/lib" >> /etc/ld.so.conf.d/opencv.conf
```

如果不是源码编译安装的，而是 `apt install` 或 `yum install` 的，则有可能已经有了对应的 conf，请仔细检查后再操作。

## 2. 开发者方案

前面 3 个都是二进制文件已经编译好，用户级的解决方案，如果是开发者，看看能怎么做。

### 2.1 rpath

```
kevin@:~$ gcc -I... -L... -Wl,-rpath=/home/kevin/opencv/installation/OpenCV-3.4.4/lib ...`
```

这样指定虽然能解决问题，尤其是调试过程中，开发分支众多的情形特别高效。但缺点也十分明显：如果开发的程序需要在用户的环境下也能用，则千万不可像这样指定一个非通用路径。

### 2.2 make

make 及基于 make 的二次工具，也可以处理 rpath 的问题

- qmake 通常不自动设置 rpath
- cmake 则比较智能，设置 target_link_libraries 时会自动加上。
