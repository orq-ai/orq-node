# GetAllMemoriesResponseBody

Successfully retrieved the list of memories.

## Example Usage

```typescript
import { GetAllMemoriesResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllMemoriesResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      entityId: "<id>",
      created: "<value>",
      updated: "<value>",
      storeId: "<id>",
      metadata: {
        "key": "<value>",
      },
      workspaceId: "<id>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | [operations.GetAllMemoriesObject](../../models/operations/getallmemoriesobject.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [operations.GetAllMemoriesData](../../models/operations/getallmemoriesdata.md)[]   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |