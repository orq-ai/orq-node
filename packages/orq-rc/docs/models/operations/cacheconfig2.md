# CacheConfig2

Configuration schema for semantic cache. Entries are matched based on vector similarity rather than exact input matches.

## Example Usage

```typescript
import { CacheConfig2 } from "@orq-ai/node/models/operations";

let value: CacheConfig2 = {
  type: "semantic",
  modelConfig: {
    model: "Camaro",
    modelDbId: "9a8bcc68-cff5-46dc-b7dc-41b0ef56fa46",
    modelType: "stt",
    modelParameters: {},
    provider: "elevenlabs",
  },
  ttl: 3600,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `type`                                                                                  | *"semantic"*                                                                            | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `modelConfig`                                                                           | [operations.ModelConfig](../../models/operations/modelconfig.md)                        | :heavy_check_mark:                                                                      | Configuration for the embedding model used to compute semantic similarity.              |                                                                                         |
| `ttl`                                                                                   | *number*                                                                                | :heavy_minus_sign:                                                                      | Time to live for cached responses in seconds. Maximum 259200 seconds (3 days).          | 3600                                                                                    |
| `similarityScoreThreshold`                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | Minimum similarity score (0 to 1) required for a cached entry to be considered a match. |                                                                                         |