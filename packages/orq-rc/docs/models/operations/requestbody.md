# RequestBody

## Example Usage

```typescript
import { RequestBody } from "@orq-ai/node/models/operations";

let value: RequestBody = {
  text: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The text content of the chunk                                                                                           |
| `embedding`                                                                                                             | *number*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | The embedding vector of the chunk. If not provided the chunk will be embedded with the knowledge base embeddings model. |
| `metadata`                                                                                                              | Record<string, *operations.CreateChunkMetadata*>                                                                        | :heavy_minus_sign:                                                                                                      | Metadata of the chunk                                                                                                   |