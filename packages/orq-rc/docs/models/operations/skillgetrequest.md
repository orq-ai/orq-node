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
| `factoryId`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Resolve the skill as one factory sees it: the skills of its project plus the workspace-level skills shared with it.    |