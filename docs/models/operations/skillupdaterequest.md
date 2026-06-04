# SkillUpdateRequest

## Example Usage

```typescript
import { SkillUpdateRequest } from "@orq-ai/node/models/operations";

let value: SkillUpdateRequest = {
  skillId: "<id>",
  updateSkillRequest: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `skillId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Skill ID to update.                                                            |
| `updateSkillRequest`                                                           | [components.UpdateSkillRequest](../../models/components/updateskillrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |