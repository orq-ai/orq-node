# UpdateMemoryStoreRequest

## Example Usage

```typescript
import { UpdateMemoryStoreRequest } from "@orq-ai/node/models/operations";

let value: UpdateMemoryStoreRequest = {
  memoryStoreKey: "<value>",
  requestBody: {
    embeddingConfig: {
      model: "jina/jina-embeddings-v3",
    },
    description: "edge er a yippee",
    path: "Customer Service/Billing/Refund",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `memoryStoreKey`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The unique key identifier of the memory store                                                      |
| `requestBody`                                                                                      | [operations.UpdateMemoryStoreRequestBody](../../models/operations/updatememorystorerequestbody.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |