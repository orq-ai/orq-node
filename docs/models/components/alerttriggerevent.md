# AlertTriggerEvent

## Example Usage

```typescript
import { AlertTriggerEvent } from "@orq-ai/node/models/components";

let value: AlertTriggerEvent = {
  eventId: "<id>",
  triggerId: "<id>",
  alertId: "<id>",
  at: new Date("2024-09-18T20:51:37.613Z"),
  value: 3275.45,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique event identifier, for example `alertevent_01H...`.                                     |
| `triggerId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Trigger the event was recorded on.                                                            |
| `alertId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Alert the event belongs to.                                                                   |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time of the evaluation tick.                                                                  |
| `value`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Observed metric value at the tick.                                                            |
| `evidence`                                                                                    | [components.AlertEvidence](../../models/components/alertevidence.md)[]                        | :heavy_minus_sign:                                                                            | Exemplar traces that contributed to the breach, worst first.                                  |