# Billing

Billing information for the agent execution

## Example Usage

```typescript
import { Billing } from "@orq-ai/node/models/components";

let value: Billing = {
  totalCost: 3954.27,
  inputCost: 5755.69,
  outputCost: 9659.16,
  billable: true,
  integrationId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `totalCost`        | *number*           | :heavy_check_mark: | N/A                |
| `inputCost`        | *number*           | :heavy_check_mark: | N/A                |
| `outputCost`       | *number*           | :heavy_check_mark: | N/A                |
| `billable`         | *boolean*          | :heavy_check_mark: | N/A                |
| `integrationId`    | *string*           | :heavy_check_mark: | N/A                |