# CreateAlertRequest

## Example Usage

```typescript
import { CreateAlertRequest } from "@orq-ai/node/models/components";

let value: CreateAlertRequest = {
  displayName: "Bette63",
  projectId: "<id>",
  query: {
    metric: "<value>",
  },
  condition: {
    comparator: "eq",
    threshold: 3752.27,
    window: "30m",
    interval: "1d",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `displayName`                                                           | *string*                                                                | :heavy_check_mark:                                                      | Workspace-unique display name.                                          |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Short human-readable summary of what the alert watches.                 |
| `projectId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Project that owns the alert. Required.                                  |
| `signal`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | UI signal preset the alert is created from. Defaults to `custom`.       |
| `query`                                                                 | [components.AlertQuery](../../models/components/alertquery.md)          | :heavy_check_mark:                                                      | Metric query evaluated on each tick.                                    |
| `condition`                                                             | [components.AlertCondition](../../models/components/alertcondition.md)  | :heavy_check_mark:                                                      | Threshold condition applied to the query result.                        |
| `notifierIds`                                                           | *string*[]                                                              | :heavy_minus_sign:                                                      | Notifiers that receive trigger-open and trigger-resolve<br/> notifications. |
| `enabled`                                                               | *boolean*                                                               | :heavy_minus_sign:                                                      | Whether the alert starts evaluating immediately. Defaults to true.      |