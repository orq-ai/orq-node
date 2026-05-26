# ListSkillsResponse

## Example Usage

```typescript
import { ListSkillsResponse } from "@orq-ai/node/models/components";

let value: ListSkillsResponse = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Object discriminator for list responses; always `list`.                  |
| `data`                                                                   | [components.Skill](../../models/components/skill.md)[]                   | :heavy_minus_sign:                                                       | Page of skills, ordered newest first.                                    |
| `hasMore`                                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether more skills are available in the selected pagination<br/> direction. |