# Seven

Embeds the text and breaks where meaning shifts, so related passages stay together. Makes paid embedding calls.

## Example Usage

```typescript
import { Seven } from "@orq-ai/node/models/components";

let value: Seven = {
  type: "semantic",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"semantic"*                                                                                 | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `chunkSize`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | Maximum number of tokens per chunk.                                                          |
| `embeddingModel`                                                                             | *string*                                                                                     | :heavy_minus_sign:                                                                           | Embedding model used to detect semantic boundaries.                                          |
| `dimensions`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of dimensions for the embedding output, when the model supports it.                   |
| `threshold`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | Similarity threshold from 0 through 1, or "auto".                                            |
| `mode`                                                                                       | [components.ChunkingConfigurationMode](../../models/components/chunkingconfigurationmode.md) | :heavy_minus_sign:                                                                           | Comparison mode.                                                                             |
| `similarityWindow`                                                                           | *number*                                                                                     | :heavy_minus_sign:                                                                           | Window size for similarity comparison.                                                       |