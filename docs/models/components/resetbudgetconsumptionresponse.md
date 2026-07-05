# ResetBudgetConsumptionResponse

## Example Usage

```typescript
import { ResetBudgetConsumptionResponse } from "@orq-ai/node/models/components";

let value: ResetBudgetConsumptionResponse = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `budget`                                                                         | [components.Budget](../../models/components/budget.md)                           | :heavy_minus_sign:                                                               | Budget after reset. The record itself is unchanged; only counters<br/> were cleared. |