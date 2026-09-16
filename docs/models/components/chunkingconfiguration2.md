# ~~ChunkingConfiguration2~~

Provides advanced settings for customizing chunking behavior, enabling fine-grained control to better meet specific data processing needs. Deprecated: use one of the named chunking strategies instead.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { ChunkingConfiguration2 } from "@orq-ai/node/models/components";

let value: ChunkingConfiguration2 = {
  type: "advanced",
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                        | *"advanced"*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `chunkMaxCharacters`                                                                                                                                          | *number*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Defines the absolute maximum character length per chunk. Text elements exceeding this size will be automatically split into multiple chunks.                  |
| `chunkOverlap`                                                                                                                                                | *number*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Specifies the number of characters to overlap between consecutive chunks. This overlap helps maintain semantic continuity when splitting large text elements. |