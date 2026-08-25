# ListChunksPaginatedRequest

## Example Usage

```typescript
import { ListChunksPaginatedRequest } from "@orq-ai/node/models/operations";

let value: ListChunksPaginatedRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  chunksServiceListPaginatedRequest: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `datasourceId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `chunksServiceListPaginatedRequest`                                                                          | [components.ChunksServiceListPaginatedRequest](../../models/components/chunksservicelistpaginatedrequest.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |