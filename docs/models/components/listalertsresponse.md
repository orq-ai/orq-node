# ListAlertsResponse

## Example Usage

```typescript
import { ListAlertsResponse } from "@orq-ai/node/models/components";

let value: ListAlertsResponse = {
  object: "<value>",
  data: [
    {
      alertId: "<id>",
      displayName: "Aaron.Orn33",
      description:
        "ruddy slink display yippee dicker blindly wherever aside near austere",
      projectId: "<id>",
      signal: "evals",
      query: {
        metric: "<value>",
      },
      condition: {
        comparator: "eq",
        threshold: 3752.27,
        window: "30m",
        interval: "1d",
      },
      notifierIds: [],
      enabled: false,
      status: "triggered",
      createdAt: new Date("2025-05-24T08:39:42.710Z"),
      updatedAt: new Date("2025-11-26T11:40:47.469Z"),
      createdById: "<id>",
      updatedById: "<id>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | Object discriminator for list responses; always `list`.                  |
| `data`                                                                   | [components.Alert](../../models/components/alert.md)[]                   | :heavy_check_mark:                                                       | Page of alerts, ordered newest first.                                    |
| `hasMore`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | Whether more alerts are available in the selected pagination<br/> direction. |