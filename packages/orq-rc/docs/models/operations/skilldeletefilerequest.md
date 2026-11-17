# SkillDeleteFileRequest

## Example Usage

```typescript
import { SkillDeleteFileRequest } from "@orq-ai/node/models/operations";

let value: SkillDeleteFileRequest = {
  skillId: "<id>",
  path: "/Network",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `skillId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Skill ID or display name to update.                                                              |
| `path`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | Relative path of the file to delete within the skill bundle (for example `references/guide.md`). |