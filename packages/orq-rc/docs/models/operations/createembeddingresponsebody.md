# CreateEmbeddingResponseBody

Returns the embedding vector.

## Example Usage

```typescript
import { CreateEmbeddingResponseBody } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingResponseBody = {
  object: "list",
  data: [],
  model: "Taurus",
  usage: {
    promptTokens: 8216.92,
    totalTokens: 1165.7,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `object`                                                                             | [operations.CreateEmbeddingObject](../../models/operations/createembeddingobject.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [operations.CreateEmbeddingData](../../models/operations/createembeddingdata.md)[]   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the model to used.                                                             |
| `usage`                                                                              | [operations.CreateEmbeddingUsage](../../models/operations/createembeddingusage.md)   | :heavy_check_mark:                                                                   | The usage information for the request.                                               |