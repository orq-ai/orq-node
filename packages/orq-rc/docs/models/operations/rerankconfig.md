# RerankConfig

## Example Usage

```typescript
import { RerankConfig } from "@orq-ai/node/models/operations";

let value: RerankConfig = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `provider`                                                                                                 | [operations.RetrievalSettingsProvider](../../models/operations/retrievalsettingsprovider.md)               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `model`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The name of the model to use                                                                               |
| `modelDbId`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The ID of the model in the database                                                                        |
| `modelType`                                                                                                | [operations.RetrievalSettingsModelType](../../models/operations/retrievalsettingsmodeltype.md)             | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `modelParameters`                                                                                          | [operations.RetrievalSettingsModelParameters](../../models/operations/retrievalsettingsmodelparameters.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |