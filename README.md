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
- Skill 是按需加载的专业工作流，不是常驻背景知识、通用偏好或工具连接本身
- Skill 必须体现可复用的程序性知识：触发场景、操作步骤、资源导航、边界条件和验证方式

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

## Agent Skills 标准

本仓库遵循 Agent Skills 的渐进加载思想：

1. 发现阶段：客户端只读取 skill 的 `name` 和 `description`，用来判断是否触发。
2. 激活阶段：任务匹配后读取完整 `SKILL.md`。
3. 执行阶段：按需读取 `references/`、`templates/`、`assets/` 或运行 `scripts/`。

因此，`SKILL.md` 必须短而准，详细材料放到资源文件中，并写明何时加载。

### `SKILL.md` 要求

- 必须包含 YAML frontmatter 和 Markdown 正文。
- frontmatter 必须包含 `name` 和 `description`。
- `name` 必须等于目录名，只使用小写字母、数字和连字符，不能以连字符开头或结尾，不能包含连续连字符，长度不超过 64。
- `description` 必须说明“做什么”和“什么时候用”，长度不超过 1024 字符，并包含真实用户会说出的触发语义。
- 正文建议包含：何时使用、工作流、资源目录、输出格式、验证方式、边界/护栏。
- `SKILL.md` 建议小于 500 行；接近上限时拆到 `references/` 或 `templates/`。
- 引用资源时使用相对路径，例如 `references/source-quality.md`，并保持一层引用，避免深层跳转链。

### `skill.json` 要求

`skill.json` 是 TeamAligned UI 和 catalog 的权威元数据来源，必须至少包含：

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

其中 `slug` 必须等于目录名；`entry` 通常为 `SKILL.md`；`sources` 必须非空，记录上游仓库、文档、规范或本地迁移来源。

### 资源目录要求

- `references/`：放领域规则、操作手册、检查清单、API 细节、故障处理、长方法论。每个文件应聚焦一个主题。
- `templates/`：放报告骨架、输出格式、配置样板、可复用文档或图表骨架。
- `scripts/`：放会被反复重写、需要确定性或可验证的脚本。脚本应自包含、错误信息清楚，并说明依赖。
- `assets/`：放静态资源，如图片、字体、示例素材或不可直接作为 Markdown 指令读取的模板文件。

如果一个 skill 需要固定输出格式，优先给模板；如果一个 skill 需要多步校验，优先给 checklist 或 validator；如果一个 skill 有易错环境细节，必须在 `SKILL.md` 的 gotchas/护栏中前置说明。

## 标准用法

### 添加或迁移 Skill

1. 明确它是否真的需要 skill：适合可复用、专业、跨任务的程序性知识；不适合一次性答案、泛泛背景资料或单纯工具安装说明。
2. 从真实来源提炼：优先来自上游 skill、项目文档、runbook、真实任务记录、审查意见或已验证流程。
3. 创建目录：`skills/<slug>/SKILL.md` 和 `skills/<slug>/skill.json`。
4. 写触发描述：用“Use when...”风格，覆盖应触发场景和关键近似说法，避免过宽。
5. 拆分资源：必要的 reference/template/script/asset 必须随 skill 一起收录。
6. 写资源导航：在 `SKILL.md` 明确“什么时候读取哪个文件”。
7. 标注来源：在 `skill.json.sources` 记录原始 URL、规范或本地来源。
8. 构建 catalog：运行 `npm run build:catalog`。
9. 验证：确认目录数和 catalog `count` 一致，新增 skill 出现在 catalog，且 `sources` 被聚合。

### Review Skill

检查顺序：

1. 结构：目录名、`SKILL.md`、`skill.json`、entry 文件是否一致。
2. 触发：`description` 是否能让 agent 在正确任务中触发，在相邻但不适用的任务中不乱触发。
3. 渐进加载：长内容是否拆到资源文件，`SKILL.md` 是否写清资源加载条件。
4. 资源完整性：上游有必要 reference/template/script 时，本地是否收录或解释为什么不需要。
5. 来源：`sources` 是否非空、可追溯，并在 catalog 中保留。
6. 执行性：工作流是否有默认路径、验证步骤、失败处理和边界说明。
7. 维护性：是否避免第三方长文整段搬运，是否按 TeamAligned 场景本地化。

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

## 规范参考

- Claude Help Center: https://support.claude.com/en/articles/12512176-what-are-skills
- Agent Skills Overview: https://agentskills.io/home
- Agent Skills Specification: https://agentskills.io/specification
- Agent Skills Best Practices: https://agentskills.io/skill-creation/best-practices
- Agent Skills Description Optimization: https://agentskills.io/skill-creation/optimizing-descriptions
