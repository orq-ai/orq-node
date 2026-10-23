# GetAlertResponse

## Example Usage

```typescript
import { GetAlertResponse } from "@orq-ai/node/models/components";

let value: GetAlertResponse = {
  alert: {
    alertId: "<id>",
    displayName: "Keon95",
    description: "intellect switchboard excepting worse versus",
    projectId: "<id>",
    signal: "errors",
    query: {
      metric: "<value>",
    },
    condition: {
      comparator: "eq",
      threshold: 3752.27,
      window: "30m",
      interval: "1d",
    },
    notifierIds: [
      "<value 1>",
    ],
    enabled: false,
    status: "ok",
    createdAt: new Date("2025-12-31T16:18:44.911Z"),
    updatedAt: new Date("2024-12-02T12:12:11.676Z"),
    createdById: "<id>",
    updatedById: "<id>",
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `alert`                                              | [components.Alert](../../models/components/alert.md) | :heavy_check_mark:                                   | Requested alert.                                     |