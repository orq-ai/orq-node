# CreateSkillResponse

## Example Usage

```typescript
import { CreateSkillResponse } from "@orq-ai/node/models/components";

let value: CreateSkillResponse = {
  skill: {
    skillId: "<id>",
    displayName: "Frederik.Bartell",
    description: "cycle deeply arbitrate wavy er cinder",
    tags: [
      "<value 1>",
    ],
    projectId: "<id>",
    path: "/opt/share",
    createdAt: new Date("2026-01-27T09:42:36.885Z"),
    updatedAt: new Date("2024-10-19T10:16:53.759Z"),
    createdById: "<id>",
    updatedById: "<id>",
    instructions: "<value>",
    version: "<value>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `skill`                                              | [components.Skill](../../models/components/skill.md) | :heavy_check_mark:                                   | Newly created skill.                                 |