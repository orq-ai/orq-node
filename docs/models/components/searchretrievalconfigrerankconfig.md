# SearchRetrievalConfigRerankConfig

Override reranking for this retrieval configuration. Omit to inherit stored settings or set to null to disable reranking.

## Example Usage

```typescript
import { SearchRetrievalConfigRerankConfig } from "@orq-ai/node/models/components";

let value: SearchRetrievalConfigRerankConfig = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `enabled`                                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `provider`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `topK`                                                                   | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `model`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `modelDbId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `modelType`                                                              | [components.ModelType](../../models/components/modeltype.md)             | :heavy_minus_sign:                                                       | N/A                                                                      |
| `modelParameters`                                                        | [components.ModelParameters](../../models/components/modelparameters.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `integrationId`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |