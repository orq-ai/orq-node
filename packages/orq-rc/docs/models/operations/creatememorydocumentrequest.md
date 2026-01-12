# CreateMemoryDocumentRequest

## Example Usage

```typescript
import { CreateMemoryDocumentRequest } from "@orq-ai/node/models/operations";

let value: CreateMemoryDocumentRequest = {
  memoryStoreKey: "<value>",
  memoryEntityId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `memoryStoreKey`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique key identifier of the memory store                                                            |
| `memoryEntityId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The unique entity_id provided during the memory store creation                                           |
| `requestBody`                                                                                            | [operations.CreateMemoryDocumentRequestBody](../../models/operations/creatememorydocumentrequestbody.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |