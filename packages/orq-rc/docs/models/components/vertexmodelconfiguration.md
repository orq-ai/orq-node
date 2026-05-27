# VertexModelConfiguration

## Example Usage

```typescript
import { VertexModelConfiguration } from "@orq-ai/node/models/components";

let value: VertexModelConfiguration = {
  capabilities: {
    structuredOutput: true,
    supportToolCalling: false,
    vision: false,
  },
  id: "<id>",
  inputCost: 342.27,
  outputCost: 5350.15,
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `capabilities`                                                                 | [components.VertexCapabilities](../../models/components/vertexcapabilities.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `inputCost`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outputCost`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `parameters`                                                                   | [components.VertexParameters](../../models/components/vertexparameters.md)     | :heavy_check_mark:                                                             | N/A                                                                            |