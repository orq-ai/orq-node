# BudgetLimitsRestResponse

BudgetLimits is the per-period spend and token ceiling. At least one
 of `amount`, `token_limit`, or RateLimit.requests_per_minute MUST be
 set on a Budget; that invariant is enforced by the handler.

## Example Usage

```typescript
import { BudgetLimitsRestResponse } from "@orq-ai/node/models/components";

let value: BudgetLimitsRestResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `period`                                                                                     | [components.BudgetPeriod](../../models/components/budgetperiod.md)                           | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `amount`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `tokenLimit`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | Token ceiling for the budget period. Token counts are whole numbers<br/> and stored as integers. |