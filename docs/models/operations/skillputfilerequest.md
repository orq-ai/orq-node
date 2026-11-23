# SkillPutFileRequest

## Example Usage

```typescript
import { SkillPutFileRequest } from "@orq-ai/node/models/operations";

let value: SkillPutFileRequest = {
  skillId: "<id>",
  putSkillFileRequest: {
    path: "/usr",
    content: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `skillId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Skill ID or display name to update.                                              |
| `putSkillFileRequest`                                                            | [components.PutSkillFileRequest](../../models/components/putskillfilerequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |