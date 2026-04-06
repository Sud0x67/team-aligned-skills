# Repository Design

## 仓库角色

这个仓库同时扮演两种角色：

1. `Skill Source Repo`
   存放技能本体，包括 `SKILL.md` 和附属文件。
2. `Skill Registry Repo`
   存放可被 TeamAligned 直接读取的结构化元数据。

## 为什么同时保留 `skill.json` 与 `SKILL.md`

### `SKILL.md`

- 面向 Agent 运行时
- 存放技能说明和执行步骤
- 尽量保持通用 agent skills 兼容性

### `skill.json`

- 面向 TeamAligned UI 和安装器
- 存放稳定的结构化字段
- 避免客户端为了展示列表去解析复杂 markdown

## 安装模型

推荐安装流程：

1. TeamAligned 读取远端仓库或本地克隆目录
2. 展示 `catalog/skills.json`
3. 用户点击安装
4. 将对应 `skills/<slug>/` 整个目录复制到本地全局目录
5. Agent 通过白名单决定可加载哪些 skill

## 版本策略

- 每个 skill 自己带 `version`
- `catalog/skills.json` 是仓库级索引
- TeamAligned 安装时应同时记录 `skill version + repo commit`

## 后续可扩展项

- 增加 `examples/`
- 增加 `templates/`
- 增加多语言描述字段
- 增加 `compatibility` 字段
- 增加签名或校验和

