# CreateMemoryRequest

## Example Usage

```typescript
import { CreateMemoryRequest } from "@orq-ai/node/models/operations";

let value: CreateMemoryRequest = {
  memoryStoreKey: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `memoryStoreKey`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique key identifier of the memory store                                            |
| `requestBody`                                                                            | [operations.CreateMemoryRequestBody](../../models/operations/creatememoryrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |