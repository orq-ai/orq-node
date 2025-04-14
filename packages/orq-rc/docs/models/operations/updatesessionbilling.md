# UpdateSessionBilling

## Example Usage

```typescript
import { UpdateSessionBilling } from "@orq-ai/node/models/operations";

let value: UpdateSessionBilling = {
  inputCost: 1921.21,
  outputCost: 7622.41,
  totalCost: 6838.74,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `inputCost`                | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `outputCost`               | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `totalCost`                | *number*                   | :heavy_check_mark:         | Total usage of the session |