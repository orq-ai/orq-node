# ListChunksResponseBody

Chunks successfully retrieved

## Example Usage

```typescript
import { ListChunksResponseBody } from "@orq-ai/node/models/operations";

let value: ListChunksResponseBody = {
  object: "list",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | [operations.ListChunksObject](../../models/operations/listchunksobject.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [operations.ListChunksData](../../models/operations/listchunksdata.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |