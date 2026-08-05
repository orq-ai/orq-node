# UpdateSmartRouterResponse

## Example Usage

```typescript
import { UpdateSmartRouterResponse } from "@orq-ai/node/models/components";

let value: UpdateSmartRouterResponse = {
  smartRouter: {
    smartRouterId: "<id>",
    key: "<key>",
    modelRef: "<value>",
    models: [
      "<value 1>",
    ],
    profile: "SMART_ROUTER_PROFILE_QUALITY",
    enabled: false,
    createdAt: new Date("2024-10-24T13:44:08.921Z"),
    updatedAt: new Date("2026-12-05T01:56:08.916Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `smartRouter`                                                    | [components.SmartRouter](../../models/components/smartrouter.md) | :heavy_check_mark:                                               | N/A                                                              |