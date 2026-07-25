# Alert

## Example Usage

```typescript
import { Alert } from "@orq-ai/node/models/components";

let value: Alert = {
  alertId: "<id>",
  displayName: "Annamarie.Prohaska53",
  description: "gee worldly foolhardy urgently huzzah digital as",
  projectId: "<id>",
  signal: "cost",
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
  createdAt: new Date("2024-01-28T20:24:14.828Z"),
  updatedAt: new Date("2026-08-05T17:17:08.407Z"),
  createdById: "<id>",
  updatedById: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `alertId`                                                                                                                      | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Unique alert identifier assigned by ORQ, for example `alert_01H...`.<br/> Use this value in retrieve, update, and delete requests. |
| `displayName`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Workspace-unique display name.                                                                                                 |
| `description`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Short human-readable summary of what the alert watches.                                                                        |
| `projectId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Project that owns the alert. Immutable after creation.                                                                         |
| `signal`                                                                                                                       | [components.Signal](../../models/components/signal.md)                                                                         | :heavy_check_mark:                                                                                                             | UI signal preset the alert was created from.                                                                                   |
| `query`                                                                                                                        | [components.AlertQuery](../../models/components/alertquery.md)                                                                 | :heavy_check_mark:                                                                                                             | Metric query evaluated on each tick.                                                                                           |
| `condition`                                                                                                                    | [components.AlertCondition](../../models/components/alertcondition.md)                                                         | :heavy_check_mark:                                                                                                             | Threshold condition applied to the query result.                                                                               |
| `notifierIds`                                                                                                                  | *string*[]                                                                                                                     | :heavy_check_mark:                                                                                                             | Notifiers that receive trigger-open and trigger-resolve<br/> notifications.                                                    |
| `enabled`                                                                                                                      | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | Whether the alert is evaluated. Disabled alerts keep their trigger<br/> history but stop firing.                               |
| `status`                                                                                                                       | [components.AlertStatus](../../models/components/alertstatus.md)                                                               | :heavy_check_mark:                                                                                                             | Current runtime status, maintained by the evaluation engine.                                                                   |
| `lastTriggeredAt`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_minus_sign:                                                                                                             | Time when the alert last opened a trigger.                                                                                     |
| `recentRuns`                                                                                                                   | [components.AlertRun](../../models/components/alertrun.md)[]                                                                   | :heavy_minus_sign:                                                                                                             | Rolling window of the most recent evaluation ticks, oldest first.<br/> Maintained by the evaluation engine; read-only.         |
| `createdAt`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | Time when the alert was created.                                                                                               |
| `updatedAt`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | Time when the alert was last updated.                                                                                          |
| `createdById`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | User ID that created the alert.                                                                                                |
| `updatedById`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | User ID that last updated the alert.                                                                                           |