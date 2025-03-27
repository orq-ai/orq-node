# RetrievalConfigRerankConfig

## Example Usage

```typescript
import { RetrievalConfigRerankConfig } from "@orq-ai/node/models/operations";

let value: RetrievalConfigRerankConfig = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `provider`                                                                                             | [operations.RetrievalConfigProvider](../../models/operations/retrievalconfigprovider.md)               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `model`                                                                                                | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The name of the model to use                                                                           |
| `modelDbId`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID of the model in the database                                                                    |
| `modelType`                                                                                            | [operations.RetrievalConfigModelType](../../models/operations/retrievalconfigmodeltype.md)             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `modelParameters`                                                                                      | [operations.RetrievalConfigModelParameters](../../models/operations/retrievalconfigmodelparameters.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |