# TelemetryRow

## Example Usage

```typescript
import { TelemetryRow } from "@orq-ai/node/models/components";

let value: TelemetryRow = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Unset when the resolved grain is "none" — one row per group, not a<br/> time series.          |
| `group`                                                                                       | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metrics`                                                                                     | Record<string, *number*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |