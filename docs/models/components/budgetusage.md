# BudgetUsage

BudgetUsage is the current-period consumption of a budget, sourced
 from the live Redis counters (not the exact ledger). Each dimension is
 the consumed side of the matching limit dimension: `amount` is the
 accumulated cost in USD (vs limits.amount), `tokens` is the accumulated
 token count (vs limits.token_limit), and `requests` is the count in the
 rolling 60-second window (vs rate_limit.requests_per_minute). All three
 are explicit-presence so the triple is always emitted in full, zeros
 included — a never-spent budget serializes {amount:0, tokens:0,
 requests:0} rather than dropping its zero dimensions.

## Example Usage

```typescript
import { BudgetUsage } from "@orq-ai/node/models/components";

let value: BudgetUsage = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `tokens`                                                                                                                     | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Carried as a double (not int64) so it serializes as a JSON number<br/> rather than a quoted string, matching limits.token_limit. |
| `requests`                                                                                                                   | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |