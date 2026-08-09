# AlertQuery

## Example Usage

```typescript
import { AlertQuery } from "@orq-ai/node/models/components";

let value: AlertQuery = {
  metric: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `metric`                                                                                                                             | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Reporting API catalogue metric, e.g. `genai.cost` or<br/> `genai.latency.avg`. Validated against the catalogue when the alert<br/> is saved. |
| `filters`                                                                                                                            | [components.MonitorFilter](../../models/components/monitorfilter.md)[]                                                               | :heavy_minus_sign:                                                                                                                   | Reporting filters combined with AND.                                                                                                 |