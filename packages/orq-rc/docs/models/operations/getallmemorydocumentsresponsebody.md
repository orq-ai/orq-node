# GetAllMemoryDocumentsResponseBody

Successfully retrieved the list of memory documents.

## Example Usage

```typescript
import { GetAllMemoryDocumentsResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllMemoryDocumentsResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      memoryId: "<id>",
      storeId: "<id>",
      text: "<value>",
      created: "<value>",
      updated: "<value>",
      workspaceId: "<id>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `object`                                                                                         | [operations.GetAllMemoryDocumentsObject](../../models/operations/getallmemorydocumentsobject.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [operations.GetAllMemoryDocumentsData](../../models/operations/getallmemorydocumentsdata.md)[]   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `hasMore`                                                                                        | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |