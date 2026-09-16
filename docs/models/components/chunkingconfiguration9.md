# ChunkingConfiguration9

Asks a model to choose the boundaries. Slowest and most expensive, best on documents with irregular structure. Makes paid model calls.

## Example Usage

```typescript
import { ChunkingConfiguration9 } from "@orq-ai/node/models/components";

let value: ChunkingConfiguration9 = {
  type: "agentic",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"agentic"*                                           | :heavy_check_mark:                                    | N/A                                                   |
| `chunkSize`                                           | *number*                                              | :heavy_minus_sign:                                    | Maximum number of tokens per chunk.                   |
| `model`                                               | *string*                                              | :heavy_minus_sign:                                    | Model that chooses the chunk boundaries.              |
| `candidateSize`                                       | *number*                                              | :heavy_minus_sign:                                    | Size of candidate splits offered to the model.        |
| `minCharactersPerChunk`                               | *number*                                              | :heavy_minus_sign:                                    | Minimum number of characters each chunk must contain. |
| `systemPrompt`                                        | *string*                                              | :heavy_minus_sign:                                    | Custom system prompt for the boundary model.          |