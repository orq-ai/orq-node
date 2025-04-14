# GetAllMemoryStoresResponseBody

Successfully retrieved the list of memory stores.

## Example Usage

```typescript
import { GetAllMemoryStoresResponseBody } from "@orq-ai/node/models/operations";

let value: GetAllMemoryStoresResponseBody = {
  object: "list",
  data: [
    {
      id: "<id>",
      key: "<key>",
      description: "oddly however fondly",
      created: "<value>",
      updated: "<value>",
      embeddingConfig: {
        model: "openai/text-embedding-ada-002",
      },
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | [operations.GetAllMemoryStoresObject](../../models/operations/getallmemorystoresobject.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [operations.GetAllMemoryStoresData](../../models/operations/getallmemorystoresdata.md)[]   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `hasMore`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |