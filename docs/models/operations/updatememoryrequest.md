# UpdateMemoryRequest

## Example Usage

```typescript
import { UpdateMemoryRequest } from "@orq-ai/node/models/operations";

let value: UpdateMemoryRequest = {
  memoryStoreKey: "<value>",
  memoryEntityId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `memoryStoreKey`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique key identifier of the memory store                                            |
| `memoryEntityId`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique identifier of the memory                                                      |
| `requestBody`                                                                            | [operations.UpdateMemoryRequestBody](../../models/operations/updatememoryrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |