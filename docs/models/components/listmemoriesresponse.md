# ListMemoriesResponse

## Example Usage

```typescript
import { ListMemoriesResponse } from "@orq-ai/node/models/components";

let value: ListMemoriesResponse = {
  object: "list",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`                                                                                       | [components.ListMemoriesResponseObject](../../models/components/listmemoriesresponseobject.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [components.Memory](../../models/components/memory.md)[]                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `hasMore`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |