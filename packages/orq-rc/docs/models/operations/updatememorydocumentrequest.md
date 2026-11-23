# UpdateMemoryDocumentRequest

## Example Usage

```typescript
import { UpdateMemoryDocumentRequest } from "@orq-ai/node/models/operations";

let value: UpdateMemoryDocumentRequest = {
  memoryStoreKey: "<value>",
  memoryEntityId: "<id>",
  documentId: "<id>",
  updateMemoryDocumentRequest: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `memoryStoreKey`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `memoryEntityId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | The Memory's generated `_id` or its `entity_id`.                                                 |
| `documentId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updateMemoryDocumentRequest`                                                                    | [components.UpdateMemoryDocumentRequest](../../models/components/updatememorydocumentrequest.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |