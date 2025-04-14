# UpdateSessionSessionsBilling

## Example Usage

```typescript
import { UpdateSessionSessionsBilling } from "@orq-ai/node/models/operations";

let value: UpdateSessionSessionsBilling = {
  inputCost: 5272.18,
  outputCost: 5419.05,
  totalCost: 1485.22,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `inputCost`                | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `outputCost`               | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `totalCost`                | *number*                   | :heavy_check_mark:         | Total usage of the session |