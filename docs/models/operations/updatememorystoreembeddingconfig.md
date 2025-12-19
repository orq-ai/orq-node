# UpdateMemoryStoreEmbeddingConfig

## Example Usage

```typescript
import { UpdateMemoryStoreEmbeddingConfig } from "@orq-ai/node/models/operations";

let value: UpdateMemoryStoreEmbeddingConfig = {
  modelId: "1035cf17-495b-47e6-b678-5d8e8b0ef180",
  provider: "aws",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `modelId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `integrationId`                                                                              | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `topK`                                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of results to return                                                                  |
| `provider`                                                                                   | [operations.UpdateMemoryStoreProvider](../../models/operations/updatememorystoreprovider.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |