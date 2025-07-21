# RecursiveChunkerStrategy

Recursively splits text using a hierarchy of separators (paragraphs, sentences, words). Versatile general-purpose chunker that preserves document structure.

## Example Usage

```typescript
import { RecursiveChunkerStrategy } from "@orq-ai/node/models/operations";

let value: RecursiveChunkerStrategy = {
  text: "<value>",
  strategy: "recursive",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `text`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The text content to be chunked                                                                         |
| `metadata`                                                                                             | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Whether to include metadata for each chunk                                                             |
| `returnType`                                                                                           | [operations.ParseChunkingRequestReturnType](../../models/operations/parsechunkingrequestreturntype.md) | :heavy_minus_sign:                                                                                     | Return format: chunks (with metadata) or texts (plain strings)                                         |
| `strategy`                                                                                             | [operations.RecursiveChunker](../../models/operations/recursivechunker.md)                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `chunkSize`                                                                                            | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Maximum tokens per chunk                                                                               |
| `separators`                                                                                           | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | Hierarchy of separators to use for splitting                                                           |
| `minCharactersPerChunk`                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Minimum characters allowed per chunk                                                                   |