# ListSessionsResponseBody

Sessions retrieved successfully.

## Example Usage

```typescript
import { ListSessionsResponseBody } from "@orq-ai/node/models/operations";

let value: ListSessionsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      externalId: "<id>",
      duration: 1042.53,
      contactIds: [
        "<value>",
      ],
      billing: {
        inputCost: 5041.07,
        outputCost: 1355.16,
        totalCost: 3464.5,
      },
      usage: {
        promptTokens: 9474.03,
        completionTokens: 3001.09,
        totalTokens: 7345.24,
      },
      tracesCount: 3661.11,
      tags: [
        "<value>",
      ],
      workspaceId: "<id>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | [operations.ListSessionsObject](../../models/operations/listsessionsobject.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [operations.ListSessionsData](../../models/operations/listsessionsdata.md)[]   | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |