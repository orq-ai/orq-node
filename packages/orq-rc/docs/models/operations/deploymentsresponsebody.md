# DeploymentsResponseBody

List all deployments

## Example Usage

```typescript
import { DeploymentsResponseBody } from "@orq-ai/node/models/operations";

let value: DeploymentsResponseBody = {
  object: "list",
  data: [
    {
      id: "c6176886-f589-4693-b156-f9710bf5ee7f",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description: "reword sunny other",
      promptConfig: {
        tools: [
          {
            type: "function",
            function: {
              name: "<value>",
              parameters: {
                type: "object",
                properties: {
                  "key": "<value>",
                },
              },
            },
          },
        ],
        model: "Model 3",
        modelType: "completion",
        modelParameters: {},
        provider: "azure",
        messages: [
          {
            role: "system",
            content: "<value>",
          },
        ],
      },
      version: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `object`                                                 | [operations.ObjectT](../../models/operations/objectt.md) | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [operations.Data](../../models/operations/data.md)[]     | :heavy_check_mark:                                       | N/A                                                      |
| `hasMore`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |