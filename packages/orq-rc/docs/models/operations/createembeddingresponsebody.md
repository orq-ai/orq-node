# CreateEmbeddingResponseBody

Returns the embedding vector.

## Example Usage

```typescript
import { CreateEmbeddingResponseBody } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingResponseBody = {
  data: null,
  model: "Taurus",
  object: "list",
  usage: {
    promptTokens: 821692,
    totalTokens: 116570,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [components.PublicEmbeddingData](../../models/components/publicembeddingdata.md)[]   | :heavy_check_mark:                                                                   | List of embedding objects.                                                           |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the model used.                                                                |
| `object`                                                                             | [operations.CreateEmbeddingObject](../../models/operations/createembeddingobject.md) | :heavy_check_mark:                                                                   | Always "list".                                                                       |
| `usage`                                                                              | [components.PublicEmbeddingUsage](../../models/components/publicembeddingusage.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |