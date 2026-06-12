# BudgetLimits

BudgetLimits is the per-period spend and token ceiling. At least one
 of `amount`, `token_limit`, or RateLimit.requests_per_minute MUST be
 set on a Budget; that invariant is enforced by the handler.

## Example Usage

```typescript
import { BudgetLimits } from "@orq-ai/node/models/components";

let value: BudgetLimits = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `period`                                                           | [components.BudgetPeriod](../../models/components/budgetperiod.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `amount`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `tokenLimit`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |