# ListAgentsResponseBody

List of agents with their configurations including fallback models

## Example Usage

```typescript
import { ListAgentsResponseBody } from "@orq-ai/node/models/operations";

let value: ListAgentsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      key: "<key>",
      workspaceId: "<id>",
      projectId: "<id>",
      role: "<value>",
      description: "stock coincide ah agreement presume",
      instructions: "<value>",
      status: "draft",
      model: {
        id: "<id>",
      },
      path: "Default",
      memoryStores: [],
      teamOfAgents: [],
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | [operations.ListAgentsObject](../../models/operations/listagentsobject.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [operations.ListAgentsData](../../models/operations/listagentsdata.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |