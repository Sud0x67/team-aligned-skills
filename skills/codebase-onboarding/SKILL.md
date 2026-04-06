---
name: codebase-onboarding
description: Build a fast, practical understanding of a codebase by finding the entrypoints, main modules, data flow, and safe first changes.
---

# Codebase Onboarding

## 何时使用

- 第一次接手一个项目
- 需要快速定位入口文件和关键模块
- 要向别人解释系统结构
- 要判断修改应该从哪里入手

## 工作方式

1. 找入口
   明确应用从哪里启动、页面从哪里路由、运行时从哪里接线。
2. 找核心模块
   区分 UI、状态、存储、运行时、工具层和配置层。
3. 画主要数据流
   关注消息从哪里来、经过谁、最后落到哪里。
4. 找可安全修改点
   说明哪部分适合先动，哪部分耦合重需要谨慎。
5. 输出面向新人
   解释要快速、清楚、避免写成低价值的文件清单。

## 输出格式

- 项目入口
- 核心模块
- 主要数据流
- 高风险区域
- 建议从哪里开始修改

## 注意事项

- 不要只罗列目录名
- 不要跳过运行时和数据层
- 对高耦合模块要明确提醒风险
- 如果仓库很大，先抓主路径，不要一开始穷举所有文件

