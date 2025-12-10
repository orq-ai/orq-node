# ContactBudget

Budget configuration for a specific contact

## Example Usage

```typescript
import { ContactBudget } from "@orq-ai/node/models/operations";

let value: ContactBudget = {
  type: "contact",
  entityId: "user_123",
  period: "monthly",
  amount: 250,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"contact"*                                                                  | :heavy_check_mark:                                                           | Contact budget type                                                          | contact                                                                      |
| `entityId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Contact external ID                                                          | user_123                                                                     |
| `period`                                                                     | [operations.RequestBodyPeriod](../../models/operations/requestbodyperiod.md) | :heavy_check_mark:                                                           | Budget period type                                                           | monthly                                                                      |
| `amount`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | Budget amount in USD for the specified period                                | 250                                                                          |