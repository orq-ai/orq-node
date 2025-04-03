# ChunkingConfiguration2

Provides advanced settings for customizing chunking behavior, enabling fine-grained control to better meet specific data processing needs.

## Example Usage

```typescript
import { ChunkingConfiguration2 } from "@orq-ai/node/models/operations";

let value: ChunkingConfiguration2 = {
  type: "advanced",
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                        | [operations.CreateDatasourceChunkingConfigurationType](../../models/operations/createdatasourcechunkingconfigurationtype.md)                                  | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `chunkMaxCharacters`                                                                                                                                          | *number*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Defines the absolute maximum character length per chunk. Text elements exceeding this size will be automatically split into multiple chunks.                  |
| `chunkOverlap`                                                                                                                                                | *number*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Specifies the number of characters to overlap between consecutive chunks. This overlap helps maintain semantic continuity when splitting large text elements. |