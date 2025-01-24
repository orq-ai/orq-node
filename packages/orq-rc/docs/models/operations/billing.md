# Billing

## Example Usage

```typescript
import { Billing } from "@orq-ai/node/models/operations";

let value: Billing = {
  billable: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `totalCost`        | *number*           | :heavy_minus_sign: | N/A                |
| `inputCost`        | *number*           | :heavy_minus_sign: | N/A                |
| `outputCost`       | *number*           | :heavy_minus_sign: | N/A                |
| `billable`         | *boolean*          | :heavy_check_mark: | N/A                |