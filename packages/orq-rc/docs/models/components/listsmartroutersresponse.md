# ListSmartRoutersResponse

## Example Usage

```typescript
import { ListSmartRoutersResponse } from "@orq-ai/node/models/components";

let value: ListSmartRoutersResponse = {
  object: "<value>",
  data: [
    {
      smartRouterId: "<id>",
      key: "<key>",
      modelRef: "<value>",
      models: [
        "<value 1>",
      ],
      profile: "SMART_ROUTER_PROFILE_COST",
      enabled: false,
      createdAt: new Date("2024-04-04T21:52:30.533Z"),
      updatedAt: new Date("2025-05-04T10:33:40.186Z"),
    },
  ],
  hasMore: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `object`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.SmartRouter](../../models/components/smartrouter.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `hasMore`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |