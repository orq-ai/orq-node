# ListSessionsBilling

## Example Usage

```typescript
import { ListSessionsBilling } from "@orq-ai/node/models/operations";

let value: ListSessionsBilling = {
  inputCost: 2290.2,
  outputCost: 9830.15,
  totalCost: 6595.74,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `inputCost`                | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `outputCost`               | *number*                   | :heavy_check_mark:         | Total cost of the session  |
| `totalCost`                | *number*                   | :heavy_check_mark:         | Total usage of the session |