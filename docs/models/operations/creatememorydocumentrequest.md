# CreateMemoryDocumentRequest

## Example Usage

```typescript
import { CreateMemoryDocumentRequest } from "@orq-ai/node/models/operations";

let value: CreateMemoryDocumentRequest = {
  memoryStoreKey: "<value>",
  memoryEntityId: "<id>",
  createMemoryDocumentRequest: {
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `memoryStoreKey`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `memoryEntityId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createMemoryDocumentRequest`                                                                    | [components.CreateMemoryDocumentRequest](../../models/components/creatememorydocumentrequest.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |