# SkillGetFileContentRequest

## Example Usage

```typescript
import { SkillGetFileContentRequest } from "@orq-ai/node/models/operations";

let value: SkillGetFileContentRequest = {
  skillId: "<id>",
  path: "/etc/ppp",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `skillId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Skill ID or display name.                                                              |
| `path`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Relative path of the file within the skill bundle (for example `references/guide.md`). |