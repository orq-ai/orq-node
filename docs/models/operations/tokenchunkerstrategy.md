# TokenChunkerStrategy

Splits text based on token count. Best for ensuring chunks fit within LLM context windows and maintaining consistent chunk sizes for embedding models.

## Example Usage

```typescript
import { TokenChunkerStrategy } from "@orq-ai/node/models/operations";

let value: TokenChunkerStrategy = {
  text: "<value>",
  strategy: "token",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `text`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The text content to be chunked                                     |
| `metadata`                                                         | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether to include metadata for each chunk                         |
| `returnType`                                                       | [operations.ReturnTypeT](../../models/operations/returntypet.md)   | :heavy_minus_sign:                                                 | Return format: chunks (with metadata) or texts (plain strings)     |
| `strategy`                                                         | [operations.TokenChunker](../../models/operations/tokenchunker.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `chunkSize`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Maximum tokens per chunk                                           |
| `chunkOverlap`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Number of tokens to overlap between chunks                         |