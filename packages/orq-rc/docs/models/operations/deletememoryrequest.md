# DeleteMemoryRequest

## Example Usage

```typescript
import { DeleteMemoryRequest } from "@orq-ai/node/models/operations";

let value: DeleteMemoryRequest = {
  memoryStoreKey: "<value>",
  memoryId: "<id>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `memoryStoreKey`                              | *string*                                      | :heavy_check_mark:                            | The unique key identifier of the memory store |
| `memoryId`                                    | *string*                                      | :heavy_check_mark:                            | The unique identifier of the memory           |