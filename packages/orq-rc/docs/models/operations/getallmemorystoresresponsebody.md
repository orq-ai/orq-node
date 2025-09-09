# GetAllMemoryStoresResponseBody

Successfully retrieved the list of memory stores.

## Example Usage

```typescript
import { GetAllMemoryStoresResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllMemoryStoresResponseBody = {
  object: "list",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [operations.GetAllMemoryStoresObject](../../models/operations/getallmemorystoresobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.GetAllMemoryStoresData](../../models/operations/getallmemorystoresdata.md)[]   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `hasMore`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |