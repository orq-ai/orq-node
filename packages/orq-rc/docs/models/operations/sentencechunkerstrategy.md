# SentenceChunkerStrategy

Splits text at sentence boundaries while respecting token limits. Ideal for maintaining semantic coherence and readability.

## Example Usage

```typescript
import { SentenceChunkerStrategy } from "@orq-ai/node/models/operations";

let value: SentenceChunkerStrategy = {
  text: "<value>",
  strategy: "sentence",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `text`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The text content to be chunked                                                               |
| `metadata`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Whether to include metadata for each chunk                                                   |
| `returnType`                                                                                 | [operations.ChunkingRequestReturnType](../../models/operations/chunkingrequestreturntype.md) | :heavy_minus_sign:                                                                           | Return format: chunks (with metadata) or texts (plain strings)                               |
| `strategy`                                                                                   | [operations.SentenceChunker](../../models/operations/sentencechunker.md)                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `chunkSize`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | Maximum tokens per chunk                                                                     |
| `chunkOverlap`                                                                               | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of overlapping tokens between chunks                                                  |
| `minSentencesPerChunk`                                                                       | *number*                                                                                     | :heavy_minus_sign:                                                                           | Minimum number of sentences per chunk                                                        |