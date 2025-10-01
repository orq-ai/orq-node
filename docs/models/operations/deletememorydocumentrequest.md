# DeleteMemoryDocumentRequest

## Example Usage

```typescript
import { DeleteMemoryDocumentRequest } from "@orq-ai/node/models/operations";

let value: DeleteMemoryDocumentRequest = {
  memoryStoreKey: "<value>",
  memoryId: "<id>",
  documentId: "<id>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `memoryStoreKey`                              | *string*                                      | :heavy_check_mark:                            | The unique key identifier of the memory store |
| `memoryId`                                    | *string*                                      | :heavy_check_mark:                            | The unique identifier of the memory           |
| `documentId`                                  | *string*                                      | :heavy_check_mark:                            | The unique identifier of the document         |