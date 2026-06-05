# UpdateProjectResponse

## Example Usage

```typescript
import { UpdateProjectResponse } from "@orq-ai/node/models/components";

let value: UpdateProjectResponse = {
  project: {
    projectId: "<id>",
    name: "<value>",
    key: "<key>",
    isArchived: true,
    isDefault: false,
    teams: [
      "<value 1>",
    ],
    createdAt: new Date("2026-04-16T10:17:07.807Z"),
    updatedAt: new Date("2025-12-05T14:50:55.493Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `project`                                                | [components.Project](../../models/components/project.md) | :heavy_check_mark:                                       | Updated project.                                         |