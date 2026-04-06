# team-aligned-skills

`team-aligned-skills` 是一个面向 `TeamAligned` 的 Skill Registry 仓库。

这个仓库的目标不是只存一堆 `SKILL.md`，而是同时解决三件事：

- 为 Agent 提供可直接加载的技能说明
- 为 TeamAligned UI 提供稳定、可解析的元数据
- 为后续版本升级、审计和扩展预留清晰结构

## 设计原则

- `Skill 内容` 与 `Skill 元数据` 同仓库存放
- 每个 skill 是一个独立目录，方便安装、复制和版本追踪
- 仓库内提供聚合 `catalog`，方便客户端快速展示
- `SKILL.md` 保持通用格式，尽量兼容通用 agent skills 生态
- `skill.json` 作为 TeamAligned 的权威元数据来源

## 目录结构

```text
team-aligned-skills/
├─ catalog/
│  └─ skills.json
├─ scripts/
│  └─ build-catalog.mjs
└─ skills/
   ├─ task-planner/
   │  ├─ skill.json
   │  └─ SKILL.md
   ├─ bug-investigator/
   ├─ research-brief/
   ├─ ui-refiner/
   └─ codebase-onboarding/
```

## 单个 Skill 目录

每个 skill 目录至少包含：

- `skill.json`
- `SKILL.md`

可选文件：

- `templates/`
- `references/`
- `examples/`
- `scripts/`

## 元数据规范

`skill.json` 是 TeamAligned 读取和展示的主要入口，建议至少包含：

- `id`
- `slug`
- `name`
- `displayName`
- `description`
- `version`
- `category`
- `tags`
- `entry`
- `recommendedTools`
- `sources`

## 生成聚合目录

```bash
node scripts/build-catalog.mjs
```

执行后会更新：

- `catalog/skills.json`

## 适合首批收录的 Skill

当前首批技能聚焦在 `TeamAligned` 最容易落地的场景：

- 任务规划
- 问题排查
- 研究简报
- UI 打磨
- 代码库上手

这些技能都参考了公开 skills 生态的组织方式，但内容已经按 `TeamAligned` 的本地优先、多 Agent、中文协作场景重写。

