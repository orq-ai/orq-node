# ChunkingConfiguration4

Groups whole sentences up to the chunk size, so chunks never cut a sentence in half.

## Example Usage

```typescript
import { ChunkingConfiguration4 } from "@orq-ai/node/models/components";

let value: ChunkingConfiguration4 = {
  type: "sentence",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"sentence"*                                                                                               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `chunkSize`                                                                                                | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Maximum number of tokens per chunk.                                                                        |
| `chunkOverlap`                                                                                             | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Number of tokens to overlap between consecutive chunks. Helps preserve continuity across chunk boundaries. |
| `minSentencesPerChunk`                                                                                     | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Minimum number of sentences each chunk must contain.                                                       |