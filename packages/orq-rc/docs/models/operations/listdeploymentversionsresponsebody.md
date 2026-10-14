# ListDeploymentVersionsResponseBody

Deployment versions retrieved.

## Example Usage

```typescript
import { ListDeploymentVersionsResponseBody } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersionsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      deploymentId: "<id>",
      variantId: "<id>",
      promptConfig: {
        model: "PT Cruiser",
        modelDbId: "<id>",
        modelType: "image",
        modelParameters: {},
        provider: "openai",
        messages: [
          {
            role: "tool",
            content: "<value>",
          },
        ],
      },
      fallbacks: [
        {
          model: "XC90",
          modelDbId: "<id>",
          modelType: "rerank",
          modelParameters: {},
          provider: "google",
        },
      ],
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
      variables: [],
      timestamp: new Date("2025-12-29T16:19:53.225Z"),
      version: "<value>",
      description:
        "coordination although alert wherever gently westernise even ha probable behind",
      status: "published",
      userId: "<id>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `object`                                                                                           | [operations.ListDeploymentVersionsObject](../../models/operations/listdeploymentversionsobject.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [operations.ListDeploymentVersionsData](../../models/operations/listdeploymentversionsdata.md)[]   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hasMore`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |