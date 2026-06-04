# ModelCreateVertexRequestBody

## Example Usage

```typescript
import { ModelCreateVertexRequestBody } from "@orq-ai/node/models/operations";

let value: ModelCreateVertexRequestBody = {
  configuration: {
    location: "<value>",
    modelConfiguration: {
      capabilities: {
        structuredOutput: true,
        supportToolCalling: false,
        vision: false,
      },
      id: "<id>",
      inputCost: 1842.05,
      outputCost: 397.13,
      parameters: {
        maxTokens: {
          max: 61384,
          min: 28529,
        },
        temperature: {
          max: 2839.71,
          min: 4776.29,
        },
        topP: {
          max: 2113.16,
          min: 8564.71,
        },
      },
    },
    projectId: "<id>",
    serviceAccount: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
  displayName: "Noble_Lang55",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `configuration`                                                                  | [components.VertexConfiguration](../../models/components/vertexconfiguration.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `displayName`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |