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
      entityId: "4bfa9eea-c8c9-4910-96ef-775d69eafa96",
      created: "<value>",
      updated: "<value>",
      storeId: "<id>",
      metadata: {
        "key": "<value>",
      },
      workspaceId: "<id>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | [operations.GetAllMemoriesObject](../../models/operations/getallmemoriesobject.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [operations.GetAllMemoriesData](../../models/operations/getallmemoriesdata.md)[]   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |