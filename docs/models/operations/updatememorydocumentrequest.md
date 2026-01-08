# UpdateMemoryDocumentRequest

## Example Usage

```typescript
import { UpdateMemoryDocumentRequest } from "@orq-ai/node/models/operations";

let value: UpdateMemoryDocumentRequest = {
  memoryStoreKey: "<value>",
  memoryEntityId: "<id>",
  documentId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `memoryStoreKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique key identifier of the memory store                                                            |
| `memoryEntityId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the memory                                                                      |
| `documentId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique identifier of the document                                                                    |
| `requestBody`                                                                                            | [operations.UpdateMemoryDocumentRequestBody](../../models/operations/updatememorydocumentrequestbody.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |