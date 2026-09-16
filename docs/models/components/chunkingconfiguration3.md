# ChunkingConfiguration3

Splits text into fixed-size token windows with optional overlap. Predictable chunk sizes, no regard for sentence or paragraph boundaries.

## Example Usage

```typescript
import { ChunkingConfiguration3 } from "@orq-ai/node/models/components";

let value: ChunkingConfiguration3 = {
  type: "token",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"token"*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `chunkSize`                                                                                                | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Maximum number of tokens per chunk.                                                                        |
| `chunkOverlap`                                                                                             | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Number of tokens to overlap between consecutive chunks. Helps preserve continuity across chunk boundaries. |