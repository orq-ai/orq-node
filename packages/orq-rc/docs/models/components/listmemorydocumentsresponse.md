# ListMemoryDocumentsResponse

## Example Usage

```typescript
import { ListMemoryDocumentsResponse } from "@orq-ai/node/models/components";

let value: ListMemoryDocumentsResponse = {
  object: "list",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                     | [components.ListMemoryDocumentsResponseObject](../../models/components/listmemorydocumentsresponseobject.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.MemoryDocument](../../models/components/memorydocument.md)[]                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `hasMore`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |