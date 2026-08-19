# ChunksServiceListResponse

## Example Usage

```typescript
import { ChunksServiceListResponse } from "@orq-ai/node/models/components";

let value: ChunksServiceListResponse = {
  object: "list",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                 | [components.ChunksServiceListResponseObject](../../models/components/chunksservicelistresponseobject.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.KnowledgeChunk](../../models/components/knowledgechunk.md)[]                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `hasMore`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |