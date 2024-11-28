# DeploymentsResponseBody

List of deployments

## Example Usage

```typescript
import { DeploymentsResponseBody } from "@orq-ai/node/models/operations";

let value: DeploymentsResponseBody = {
  object: "list",
  data: [
    {
      id: "56ecb1eb-f2d2-491d-8c96-1b7bdfd05b28",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description: "apologise lest ick yum",
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
        modelType: "vision",
        modelParameters: {},
        provider: "anthropic",
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