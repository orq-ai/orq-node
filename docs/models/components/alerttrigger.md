# AlertTrigger

## Example Usage

```typescript
import { AlertTrigger } from "@orq-ai/node/models/components";

let value: AlertTrigger = {
  triggerId: "<id>",
  alertId: "<id>",
  projectId: "<id>",
  status: "resolved",
  openedAt: new Date("2025-05-04T14:04:39.259Z"),
  peakValue: 7400.02,
  lastValue: 3190.78,
  eventCount: 125029,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `triggerId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique trigger identifier, for example `trigger_01H...`.                                      |
| `alertId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Alert this trigger belongs to.                                                                |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Project that owns the alert.                                                                  |
| `status`                                                                                      | [components.AlertTriggerStatus](../../models/components/alerttriggerstatus.md)                | :heavy_check_mark:                                                                            | Whether the breach is ongoing or recovered.                                                   |
| `severity`                                                                                    | [components.AlertTriggerSeverity](../../models/components/alerttriggerseverity.md)            | :heavy_minus_sign:                                                                            | Current tier of the incident.                                                                 |
| `peakSeverity`                                                                                | [components.PeakSeverity](../../models/components/peakseverity.md)                            | :heavy_minus_sign:                                                                            | Worst tier reached while the trigger was open.                                                |
| `openedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time when the threshold was first crossed.                                                    |
| `resolvedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Time when the value recovered. Unset while the trigger is open.                               |
| `peakValue`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Worst observed value while the trigger was open.                                              |
| `lastValue`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Most recent observed value.                                                                   |
| `eventCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of evaluation events recorded on this trigger.                                         |