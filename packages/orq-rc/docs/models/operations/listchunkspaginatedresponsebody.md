# ListChunksPaginatedResponseBody

Chunks successfully retrieved

## Example Usage

```typescript
import { ListChunksPaginatedResponseBody } from "@orq-ai/node/models/operations";

let value: ListChunksPaginatedResponseBody = {
  object: "list",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `object`                                                                                     | [operations.ListChunksPaginatedObject](../../models/operations/listchunkspaginatedobject.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [operations.ListChunksPaginatedData](../../models/operations/listchunkspaginateddata.md)[]   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `hasMore`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |