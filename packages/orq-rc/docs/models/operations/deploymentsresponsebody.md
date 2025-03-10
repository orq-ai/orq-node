# DeploymentsResponseBody

List all deployments

## Example Usage

```typescript
import { DeploymentsResponseBody } from "@orq-ai/node/models/operations";

let value: DeploymentsResponseBody = {
  object: "list",
  data: [
    {
      id: "e56ecb1e-bf2d-4291-adc9-61b7bdfd05b2",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description: "presume obedience finally",
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
        model: "Volt",
        modelType: "stt",
        modelParameters: {},
        provider: "aws",
        messages: [
          {
            role: "assistant",
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