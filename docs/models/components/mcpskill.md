# McpSkill

A skill an upstream server publishes through the MCP Skills extension (`io.modelcontextprotocol/skills`).

## Example Usage

```typescript
import { McpSkill } from "@orq-ai/node/models/components";

let value: McpSkill = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uri`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | Resource URI of the skill's `SKILL.md` on the upstream server.       |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Skill name from the `SKILL.md` frontmatter.                          |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Skill description from the `SKILL.md` frontmatter.                   |
| `frontmatter`                                                        | [components.Frontmatter](../../models/components/frontmatter.md)     | :heavy_minus_sign:                                                   | Full `SKILL.md` frontmatter as published upstream.                   |
| `files`                                                              | [components.McpSkillFile](../../models/components/mcpskillfile.md)[] | :heavy_minus_sign:                                                   | Manifest of the skill's files; empty when the skill is dynamic.      |
| `dynamic`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | Upstream generates the skill's content and publishes no manifest.    |