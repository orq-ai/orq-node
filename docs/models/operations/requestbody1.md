# RequestBody1

## Example Usage

```typescript
import { RequestBody1 } from "@orq-ai/node/models/operations";

let value: RequestBody1 = {
  type: "contact",
  entityId: "user_123",
  period: "monthly",
  amount: 250,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.CreateBudgetRequestBodyType](../../models/operations/createbudgetrequestbodytype.md)     | :heavy_check_mark:                                                                                   | Contact budget type                                                                                  | contact                                                                                              |
| `entityId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Contact external ID                                                                                  | user_123                                                                                             |
| `period`                                                                                             | [operations.CreateBudgetRequestBodyPeriod](../../models/operations/createbudgetrequestbodyperiod.md) | :heavy_check_mark:                                                                                   | Budget period type                                                                                   | monthly                                                                                              |
| `amount`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | Budget amount in USD for the specified period                                                        | 250                                                                                                  |