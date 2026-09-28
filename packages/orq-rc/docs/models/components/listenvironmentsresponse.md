# ListEnvironmentsResponse

## Example Usage

```typescript
import { ListEnvironmentsResponse } from "@orq-ai/node/models/components";

let value: ListEnvironmentsResponse = {
  object: "<value>",
  data: [
    {
      id: "<id>",
      slug: "<value>",
      displayName: "Itzel.Friesen",
      description:
        "which ew ew anaesthetise bashfully among times french rigidly",
      createdAt: new Date("2025-02-04T03:59:41.430Z"),
      createdById: "<id>",
      updatedAt: new Date("2026-08-07T17:42:41.948Z"),
      updatedById: "<id>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `object`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Environment](../../models/components/environment.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `hasMore`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |