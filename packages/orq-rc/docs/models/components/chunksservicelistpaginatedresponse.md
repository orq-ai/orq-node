# ChunksServiceListPaginatedResponse

## Example Usage

```typescript
import { ChunksServiceListPaginatedResponse } from "@orq-ai/node/models/components";

let value: ChunksServiceListPaginatedResponse = {
  object: "list",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                   | [components.ChunksServiceListPaginatedResponseObject](../../models/components/chunksservicelistpaginatedresponseobject.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `data`                                                                                                                     | [components.KnowledgeChunk](../../models/components/knowledgechunk.md)[]                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `hasMore`                                                                                                                  | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |