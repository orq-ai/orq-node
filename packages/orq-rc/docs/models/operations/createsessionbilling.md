# CreateSessionBilling

## Example Usage

```typescript
import { CreateSessionBilling } from "@orq-ai/node/models/operations";

let value: CreateSessionBilling = {
  inputCost: 8242.3,
  outputCost: 7584.34,
  totalCost: 8250.08,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `inputCost`                | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `outputCost`               | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `totalCost`                | *number*                   | :heavy_check_mark:         | Total usage of the session |