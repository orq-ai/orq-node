# ListAgentsResponseBody

Successfully retrieved the list of agents. Returns a paginated response containing agent manifests with complete configurations, including primary and fallback models, tools, knowledge bases, and execution settings.

## Example Usage

```typescript
import { ListAgentsResponseBody } from "@orq-ai/node/models/operations";

let value: ListAgentsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      key: "<key>",
      displayName: "Fleta.Oberbrunner",
      role: "<value>",
      description:
        "lasting functional into if excepting apprehensive tray thoughtfully wallop",
      instructions: "<value>",
      status: "published",
      model: {
        id: "<id>",
        retry: {
          onCodes: [
            429,
            500,
            502,
            503,
            504,
          ],
        },
        fallbackModels: [
          "<value>",
        ],
      },
      path: "Default",
      memoryStores: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      teamOfAgents: [
        {
          key: "<key>",
        },
      ],
      knowledgeBases: [
        {
          knowledgeId: "customer-knowledge-base",
        },
      ],
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