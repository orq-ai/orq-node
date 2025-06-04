# DeploymentsResponseBody

List all deployments

## Example Usage

```typescript
import { DeploymentsResponseBody } from "@orq-ai/node/models/operations";

let value: DeploymentsResponseBody = {
  object: "list",
  data: [
    {
      id: "9ab092b0-7aaa-47ec-ba5e-bc4ffa1aa96b",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description: "thankfully blacken considering phew footrest",
      promptConfig: {
        tools: [
          {
            type: "function",
            function: {
              name: "<value>",
              parameters: {
                type: "object",
                properties: {},
              },
            },
          },
        ],
        model: "Grand Caravan",
        modelType: "embedding",
        modelParameters: {},
        provider: "aws",
        messages: [],
      },
      version: "<value>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `object`                                                 | [operations.ObjectT](../../models/operations/objectt.md) | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [operations.Data](../../models/operations/data.md)[]     | :heavy_check_mark:                                       | N/A                                                      |
| `hasMore`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |