# DeleteMemoryDocumentRequest

## Example Usage

```typescript
import { DeleteMemoryDocumentRequest } from "@orq-ai/node/models/operations";

let value: DeleteMemoryDocumentRequest = {
  memoryStoreKey: "<value>",
  memoryEntityId: "<id>",
  documentId: "<id>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `memoryStoreKey`                                 | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `memoryEntityId`                                 | *string*                                         | :heavy_check_mark:                               | The Memory's generated `_id` or its `entity_id`. |
| `documentId`                                     | *string*                                         | :heavy_check_mark:                               | N/A                                              |