# Totals

## Example Usage

```typescript
import { Totals } from "@orq-ai/node/models/components";

let value: Totals = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `metrics`                                                                         | Record<string, *number*>                                                          | :heavy_minus_sign:                                                                | Same shape and rules as `DataPoint.metrics`, aggregated across the<br/> whole window. |