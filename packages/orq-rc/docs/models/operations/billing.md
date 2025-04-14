# Billing

## Example Usage

```typescript
import { Billing } from "@orq-ai/node/models/operations";

let value: Billing = {
  inputCost: 3954.27,
  outputCost: 5755.69,
  totalCost: 9659.16,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `inputCost`                | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `outputCost`               | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `totalCost`                | *number*                   | :heavy_check_mark:         | Total usage of the session |