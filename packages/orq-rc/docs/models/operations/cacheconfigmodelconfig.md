# CacheConfigModelConfig

Configuration of embedding model to be used

## Example Usage

```typescript
import { CacheConfigModelConfig } from "@orq-ai/node/models/operations";

let value: CacheConfigModelConfig = {
  model: "Corvette",
  modelDbId: "292d0d37-bc67-4054-b642-f6ae92cc6863",
  modelType: "stt",
  modelParameters: {},
  provider: "groq",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `modelDbId`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The id of the resource                                                                                                           |
| `modelType`                                                                                                                      | [operations.DeploymentGetLogsCacheConfigModelType](../../models/operations/deploymentgetlogscacheconfigmodeltype.md)             | :heavy_check_mark:                                                                                                               | The type of the model                                                                                                            |
| `modelParameters`                                                                                                                | [operations.DeploymentGetLogsCacheConfigModelParameters](../../models/operations/deploymentgetlogscacheconfigmodelparameters.md) | :heavy_check_mark:                                                                                                               | Model Parameters: Not all parameters apply to every model                                                                        |
| `provider`                                                                                                                       | [operations.DeploymentGetLogsCacheConfigProvider](../../models/operations/deploymentgetlogscacheconfigprovider.md)               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `integrationId`                                                                                                                  | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The id of the resource                                                                                                           |
| `version`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |