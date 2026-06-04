# VertexParameters

## Example Usage

```typescript
import { VertexParameters } from "@orq-ai/node/models/components";

let value: VertexParameters = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `maxTokens`                                                                      | [components.VertexParamRangeInt](../../models/components/vertexparamrangeint.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `temperature`                                                                    | [components.VertexParamRange](../../models/components/vertexparamrange.md)       | :heavy_check_mark:                                                               | N/A                                                                              |
| `topP`                                                                           | [components.VertexParamRange](../../models/components/vertexparamrange.md)       | :heavy_check_mark:                                                               | N/A                                                                              |