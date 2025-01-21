# CacheConfig2

Schema for exact matching type of cache.

## Example Usage

```typescript
import { CacheConfig2 } from "@orq-ai/node/models/operations";

let value: CacheConfig2 = {
  type: "semantic",
  modelConfig: {
    model: "CTS",
    modelDbId: "602987b4-6f9a-4b76-b7d5-e04ee33c5334",
    modelType: "image",
    modelParameters: {},
    provider: "anthropic",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.DeploymentGetLogsCacheConfigType](../../models/operations/deploymentgetlogscacheconfigtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `modelConfig`                                                                                              | [operations.ModelConfig](../../models/operations/modelconfig.md)                                           | :heavy_check_mark:                                                                                         | Configuration of embedding model to be used                                                                |
| `ttl`                                                                                                      | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Time To Live                                                                                               |
| `similarityScoreThreshold`                                                                                 | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | A floating-point number typically ranging from 0 to 1.                                                     |