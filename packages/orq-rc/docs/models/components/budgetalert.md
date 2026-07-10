# BudgetAlert

Notifies every listed notifier once current-period consumption on
 `dimension` reaches `threshold_percent` of the matching limit. Each alert
 fires at most once per period, re-arming on rollover or a limit change.
 The dimension must have a limit set, or the write is rejected.

## Example Usage

```typescript
import { BudgetAlert } from "@orq-ai/node/models/components";

let value: BudgetAlert = {
  thresholdPercent: 464482,
  notifierIds: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_minus_sign:                                                                 | Assigned by ORQ. Supply an existing id to edit that alert in place.                |
| `thresholdPercent`                                                                 | *number*                                                                           | :heavy_check_mark:                                                                 | Percentage of the dimension's limit at which the alert fires, 1–100.               |
| `notifierIds`                                                                      | *string*[]                                                                         | :heavy_check_mark:                                                                 | Must be workspace-scoped; project-scoped notifiers are rejected.                   |
| `dimension`                                                                        | [components.BudgetAlertDimension](../../models/components/budgetalertdimension.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |