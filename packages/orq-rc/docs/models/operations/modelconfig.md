# ModelConfig

Configuration of embedding model to be used

## Example Usage

```typescript
import { ModelConfig } from "@orq-ai/node/models/operations";

let value: ModelConfig = {
  model: "ATS",
  modelDbId: "a60b2c49-927d-4f02-a90c-9a991375ca4f",
  modelType: "rerank",
  modelParameters: {},
  provider: "togetherai",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelDbId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The id of the resource                                                                         |
| `modelType`                                                                                    | [operations.CacheConfigModelType](../../models/operations/cacheconfigmodeltype.md)             | :heavy_check_mark:                                                                             | The type of the model                                                                          |
| `modelParameters`                                                                              | [operations.CacheConfigModelParameters](../../models/operations/cacheconfigmodelparameters.md) | :heavy_check_mark:                                                                             | Model Parameters: Not all parameters apply to every model                                      |
| `provider`                                                                                     | [operations.CacheConfigProvider](../../models/operations/cacheconfigprovider.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `integrationId`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | The id of the resource                                                                         |
| `version`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |