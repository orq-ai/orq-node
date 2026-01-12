# RetrieveMemoryDocumentRequest

## Example Usage

```typescript
import { RetrieveMemoryDocumentRequest } from "@orq-ai/node/models/operations";

let value: RetrieveMemoryDocumentRequest = {
  memoryStoreKey: "<value>",
  memoryEntityId: "<id>",
  documentId: "<id>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `memoryStoreKey`                              | *string*                                      | :heavy_check_mark:                            | The unique key identifier of the memory store |
| `memoryEntityId`                              | *string*                                      | :heavy_check_mark:                            | The unique identifier of the memory           |
| `documentId`                                  | *string*                                      | :heavy_check_mark:                            | The unique identifier of the document         |