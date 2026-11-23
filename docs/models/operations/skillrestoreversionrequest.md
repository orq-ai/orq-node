# SkillRestoreVersionRequest

## Example Usage

```typescript
import { SkillRestoreVersionRequest } from "@orq-ai/node/models/operations";

let value: SkillRestoreVersionRequest = {
  skillId: "<id>",
  restoreSkillVersionRequest: {
    versionId: "<id>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `skillId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | Skill ID or display name to restore.                                                           |
| `restoreSkillVersionRequest`                                                                   | [components.RestoreSkillVersionRequest](../../models/components/restoreskillversionrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |