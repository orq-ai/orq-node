# DeploymentsResponseBody

List all deployments

## Example Usage

```typescript
import { DeploymentsResponseBody } from "@orq-ai/node/models/operations";

let value: DeploymentsResponseBody = {
  object: "list",
  data: [
    {
      id: "6176886f-5896-4931-856f-9710bf5ee7fd",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description: "since snappy robust exaggerate unto",
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
        model: "LeBaron",
        modelType: "rerank",
        modelParameters: {},
        provider: "huggingface",
        messages: [],
      },
      version: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | [operations.DeploymentsObject](../../models/operations/deploymentsobject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.DeploymentsData](../../models/operations/deploymentsdata.md)[]   | :heavy_check_mark:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |