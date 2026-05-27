# VertexConfiguration

## Example Usage

```typescript
import { VertexConfiguration } from "@orq-ai/node/models/components";

let value: VertexConfiguration = {
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
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `location`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `modelConfiguration`                                                                       | [components.VertexModelConfiguration](../../models/components/vertexmodelconfiguration.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `projectId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `serviceAccount`                                                                           | Record<string, *any*>                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |