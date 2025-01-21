# DeploymentGetLogsCacheConfigDeployments2

Schema for exact matching type of cache.

## Example Usage

```typescript
import { DeploymentGetLogsCacheConfigDeployments2 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsCacheConfigDeployments2 = {
  type: "semantic",
  modelConfig: {
    model: "Volt",
    modelDbId: "c8d76b31-551d-4a08-b28c-6989723ebf05",
    modelType: "vision",
    modelParameters: {},
    provider: "perplexity",
  },
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [operations.DeploymentGetLogsCacheConfigDeploymentsResponse200ApplicationJSONType](../../models/operations/deploymentgetlogscacheconfigdeploymentsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `modelConfig`                                                                                                                                                                        | [operations.DeploymentGetLogsCacheConfigModelConfig](../../models/operations/deploymentgetlogscacheconfigmodelconfig.md)                                                             | :heavy_check_mark:                                                                                                                                                                   | Configuration of embedding model to be used                                                                                                                                          |
| `ttl`                                                                                                                                                                                | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | Time To Live                                                                                                                                                                         |
| `similarityScoreThreshold`                                                                                                                                                           | *number*                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                   | A floating-point number typically ranging from 0 to 1.                                                                                                                               |