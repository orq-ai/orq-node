# ListSkillsResponse

## Example Usage

```typescript
import { ListSkillsResponse } from "@orq-ai/node/models/components";

let value: ListSkillsResponse = {
  object: "<value>",
  data: [
    {
      skillId: "<id>",
      displayName: "Nelson4",
      description: "boohoo sniveling kielbasa",
      tags: [
        "<value 1>",
      ],
      projectId: "<id>",
      path: "/etc/mail",
      createdAt: new Date("2024-02-23T09:23:42.106Z"),
      updatedAt: new Date("2025-02-09T11:18:11.592Z"),
      createdById: "<id>",
      updatedById: "<id>",
      instructions: "<value>",
      version: "<value>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Object discriminator for list responses; always `list`.                  |
| `data`                                                                   | [components.Skill](../../models/components/skill.md)[]                   | :heavy_check_mark:                                                       | Page of skills, ordered newest first.                                    |
| `hasMore`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | Whether more skills are available in the selected pagination<br/> direction. |