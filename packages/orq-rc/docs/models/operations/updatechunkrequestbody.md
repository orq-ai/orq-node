# UpdateChunkRequestBody

## Example Usage

```typescript
import { UpdateChunkRequestBody } from "@orq-ai/node/models/operations";

let value: UpdateChunkRequestBody = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The text content of the chunk                                                                                           |
| `embedding`                                                                                                             | *number*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | The embedding vector of the chunk. If not provided the chunk will be embedded with the knowledge base embeddings model. |
| `metadata`                                                                                                              | Record<string, *operations.UpdateChunkMetadata*>                                                                        | :heavy_minus_sign:                                                                                                      | Metadata of the chunk                                                                                                   |