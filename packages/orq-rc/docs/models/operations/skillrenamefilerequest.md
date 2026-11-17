# SkillRenameFileRequest

## Example Usage

```typescript
import { SkillRenameFileRequest } from "@orq-ai/node/models/operations";

let value: SkillRenameFileRequest = {
  skillId: "<id>",
  renameSkillFileRequest: {
    oldPath: "<value>",
    newPath: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `skillId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Skill ID or display name to update.                                                    |
| `renameSkillFileRequest`                                                               | [components.RenameSkillFileRequest](../../models/components/renameskillfilerequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |