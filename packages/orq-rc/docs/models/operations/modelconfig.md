# ModelConfig

Configuration for the embedding model used to compute semantic similarity.

## Example Usage

```typescript
import { ModelConfig } from "@orq-ai/node/models/operations";

let value: ModelConfig = {
  model: "Golf",
  modelDbId: "f2734a31-51c2-46ec-848d-596e8db6d90e",
  modelType: "image",
  modelParameters: {},
  provider: "deepseek",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `model`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `modelDbId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The id of the resource                                                                         |
| `modelType`                                                                                    | [operations.CacheConfigModelType](../../models/operations/cacheconfigmodeltype.md)             | :heavy_check_mark:                                                                             | The modality of the model                                                                      |
| `modelParameters`                                                                              | [operations.CacheConfigModelParameters](../../models/operations/cacheconfigmodelparameters.md) | :heavy_check_mark:                                                                             | Model Parameters: Not all parameters apply to every model                                      |
| `provider`                                                                                     | [operations.CacheConfigProvider](../../models/operations/cacheconfigprovider.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `integrationId`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | The ID of the integration to use                                                               |
| `version`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `isPrivate`                                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |