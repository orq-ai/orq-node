# DatasourceChunkingOptions

## Example Usage

```typescript
import { DatasourceChunkingOptions } from "@orq-ai/node/models/components";

let value: DatasourceChunkingOptions = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `chunkingConfiguration`                                                                                                            | *components.ChunkingConfiguration*                                                                                                 | :heavy_minus_sign:                                                                                                                 | The chunking configuration settings for the datasource. Defaults to the system's standard chunking configuration if not specified. |
| `chunkingCleanupOptions`                                                                                                           | [components.ChunkingCleanupOptions](../../models/components/chunkingcleanupoptions.md)                                             | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |