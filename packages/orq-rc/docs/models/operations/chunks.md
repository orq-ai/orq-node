# Chunks

## Example Usage

```typescript
import { Chunks } from "@orq-ai/node/models/operations";

let value: Chunks = {
  text: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The text content of the chunk                                                                                           |
| `embedding`                                                                                                             | *number*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | The embedding vector of the chunk. If not provided the chunk will be embedded with the knowledge base embeddings model. |
| `metadata`                                                                                                              | [operations.CreateChunkMetadata](../../models/operations/createchunkmetadata.md)                                        | :heavy_minus_sign:                                                                                                      | Metadata of the chunk                                                                                                   |