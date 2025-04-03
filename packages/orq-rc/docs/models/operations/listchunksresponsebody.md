# ListChunksResponseBody

Chunks successfully retrieved

## Example Usage

```typescript
import { ListChunksResponseBody } from "@orq-ai/node/models/operations";

let value: ListChunksResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      text: "<value>",
      enabled: false,
      status: "queued",
      created: "<value>",
      updated: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `object`                                                                   | [operations.ListChunksObject](../../models/operations/listchunksobject.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [operations.ListChunksData](../../models/operations/listchunksdata.md)[]   | :heavy_check_mark:                                                         | N/A                                                                        |
| `hasMore`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |