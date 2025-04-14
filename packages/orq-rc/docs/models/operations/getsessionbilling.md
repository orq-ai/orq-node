# GetSessionBilling

## Example Usage

```typescript
import { GetSessionBilling } from "@orq-ai/node/models/operations";

let value: GetSessionBilling = {
  inputCost: 9747.09,
  outputCost: 787.62,
  totalCost: 9153.23,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `inputCost`                | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `outputCost`               | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `totalCost`                | *number*                   | :heavy_check_mark:         | Total usage of the session |