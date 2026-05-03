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

新增或迁移 skill 时，如果上游能力依赖报告骨架、输出格式、检查清单、领域规则或操作手册，必须同步提供必要的 `templates/` 和 `references/`，并在 `SKILL.md` 中写清楚何时读取这些资源。

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
- PDF 处理
- Word 文档处理
- 表格处理
- 演示文稿处理
- OpenAI 文档研究
- GitHub 协作
- React 性能优化
- 批量重构
- Skill 审计
- Python 项目规范
- Git 提交规范
- Next.js 最佳实践
- AI SDK 构建
- AI 界面组件
- 浏览器自动化
- Vercel 部署
- 持久工作流
- JSON 渲染界面
- 网页设计指南
- Skill 搜集
- Draw.io 专业图表
- 个股研究简报
- 股票因子分析
- 技术策略回测
- 组合风险复核
- 股票多视角辩论
- 股票价值分析器

这些技能都参考了公开 skills 生态的组织方式，但内容已经按 `TeamAligned` 的本地优先、多 Agent、中文协作场景重写。

## 来源标注

每个 `skill.json` 的 `sources` 字段记录参考来源或本地迁移来源。新增 skill 参考了 GitHub 与官方文档中的公开 Agent Skills 生态，包括 Anthropic Skills、OpenAI/Codex 相关资源、Vercel Agent Resources/Skills、Kimi Code CLI 的 skill 规范，以及各技术栈官方文档。仓库内文本已按 `TeamAligned` 的使用方式做本地化整理，避免把第三方内容整段复制进来。
