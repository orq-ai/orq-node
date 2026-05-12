# SkillGetRequest

## Example Usage

```typescript
import { SkillGetRequest } from "@orq-ai/node/models/operations";

let value: SkillGetRequest = {
  skillId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `skillId`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Accepts either the skill's ID (e.g. "skill_01H...") or its display<br/> name. Display names are unique within a workspace. |