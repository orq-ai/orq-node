# UpdateMemoryStoreMemoryStoresEmbeddingConfig

## Example Usage

```typescript
import { UpdateMemoryStoreMemoryStoresEmbeddingConfig } from "@orq-ai/node/models/operations";

let value: UpdateMemoryStoreMemoryStoresEmbeddingConfig = {
  modelId: "bf40289f-2674-4b28-8ba8-65f57eb298ad",
  provider: "jina",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `modelId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `integrationId`                                                                              | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `topK`                                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of results to return                                                                  |
| `provider`                                                                                   | [operations.UpdateMemoryStoreProvider](../../models/operations/updatememorystoreprovider.md) | :heavy_check_mark:                                                                           | The provider of the AI service                                                               |