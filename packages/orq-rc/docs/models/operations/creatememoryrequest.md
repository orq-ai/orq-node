# CreateMemoryRequest

## Example Usage

```typescript
import { CreateMemoryRequest } from "@orq-ai/node/models/operations";

let value: CreateMemoryRequest = {
  memoryStoreKey: "<value>",
  createMemoryRequest: {
    entityId: "<id>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `memoryStoreKey`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `createMemoryRequest`                                                            | [components.CreateMemoryRequest](../../models/components/creatememoryrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |