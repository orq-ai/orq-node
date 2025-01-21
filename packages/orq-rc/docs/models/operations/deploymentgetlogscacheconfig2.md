# DeploymentGetLogsCacheConfig2

Schema for exact matching type of cache.

## Example Usage

```typescript
import { DeploymentGetLogsCacheConfig2 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsCacheConfig2 = {
  type: "semantic",
  modelConfig: {
    model: "Explorer",
    modelDbId: "744dd0b5-e35b-41ba-b4be-c82e76835b9c",
    modelType: "stt",
    modelParameters: {},
    provider: "anthropic",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [operations.DeploymentGetLogsCacheConfigDeploymentsResponseType](../../models/operations/deploymentgetlogscacheconfigdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `modelConfig`                                                                                                                                    | [operations.CacheConfigModelConfig](../../models/operations/cacheconfigmodelconfig.md)                                                           | :heavy_check_mark:                                                                                                                               | Configuration of embedding model to be used                                                                                                      |
| `ttl`                                                                                                                                            | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Time To Live                                                                                                                                     |
| `similarityScoreThreshold`                                                                                                                       | *number*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | A floating-point number typically ranging from 0 to 1.                                                                                           |