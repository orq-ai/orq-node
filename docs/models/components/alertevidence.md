# AlertEvidence

## Example Usage

```typescript
import { AlertEvidence } from "@orq-ai/node/models/components";

let value: AlertEvidence = {
  traceId: "<id>",
  spanId: "<id>",
  startTime: new Date("2025-11-19T06:32:19.401Z"),
  value: 2186.11,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `traceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Trace the exemplar span belongs to.                                                           |
| `spanId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Exemplar span ID.                                                                             |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start time of the exemplar span.                                                              |
| `value`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Metric contribution of the exemplar (e.g. cost or duration).                                  |