# AlertRun

## Example Usage

```typescript
import { AlertRun } from "@orq-ai/node/models/components";

let value: AlertRun = {
  at: new Date("2024-07-27T16:55:20.731Z"),
  value: 952.28,
  breached: false,
  hasData: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time of the evaluation tick.                                                                  |
| `value`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Observed metric value. Zero when `has_data` is false.                                         |
| `breached`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the value breached the alert condition.                                               |
| `hasData`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the evaluation window contained any data.                                             |
| `severity`                                                                                    | [components.Severity](../../models/components/severity.md)                                    | :heavy_minus_sign:                                                                            | Tier the value landed in when breached. Empty when not breached.                              |