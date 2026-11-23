# UpdateMemoryRequest

## Example Usage

```typescript
import { UpdateMemoryRequest } from "@orq-ai/node/models/operations";

let value: UpdateMemoryRequest = {
  memoryStoreKey: "<value>",
  memoryEntityId: "<id>",
  updateMemoryRequest: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `memoryStoreKey`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `memoryEntityId`                                                                 | *string*                                                                         | :heavy_check_mark:                                                               | The Memory's generated `_id` or its `entity_id`.                                 |
| `updateMemoryRequest`                                                            | [components.UpdateMemoryRequest](../../models/components/updatememoryrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |