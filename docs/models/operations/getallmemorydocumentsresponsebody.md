# GetAllMemoryDocumentsResponseBody

Successfully retrieved the list of memory documents.

## Example Usage

```typescript
import { GetAllMemoryDocumentsResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllMemoryDocumentsResponseBody = {
  object: "list",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `object`                                                                                         | [operations.GetAllMemoryDocumentsObject](../../models/operations/getallmemorydocumentsobject.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [operations.GetAllMemoryDocumentsData](../../models/operations/getallmemorydocumentsdata.md)[]   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `hasMore`                                                                                        | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |