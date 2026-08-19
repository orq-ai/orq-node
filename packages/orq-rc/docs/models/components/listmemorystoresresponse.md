# ListMemoryStoresResponse

## Example Usage

```typescript
import { ListMemoryStoresResponse } from "@orq-ai/node/models/components";

let value: ListMemoryStoresResponse = {
  object: "list",
  data: [
    {
      key: "<key>",
      description:
        "times meanwhile bid repeatedly whose which obedience boohoo instead huzzah",
      created: "<value>",
      updated: "<value>",
      embeddingConfig: {
        model: "Mercielago",
      },
      id: "<id>",
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `object`                                                                                               | [components.ListMemoryStoresResponseObject](../../models/components/listmemorystoresresponseobject.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.MemoryStore](../../models/components/memorystore.md)[]                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hasMore`                                                                                              | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |