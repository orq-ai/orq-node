# WorkspaceBudget

Budget configuration for the entire workspace

## Example Usage

```typescript
import { WorkspaceBudget } from "@orq-ai/node/models/operations";

let value: WorkspaceBudget = {
  type: "workspace",
  period: "monthly",
  amount: 250,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.CreateBudgetRequestBodyBudgetsType](../../models/operations/createbudgetrequestbodybudgetstype.md) | :heavy_check_mark:                                                                                             | Workspace budget type                                                                                          | workspace                                                                                                      |
| `period`                                                                                                       | [operations.RequestBodyPeriod](../../models/operations/requestbodyperiod.md)                                   | :heavy_check_mark:                                                                                             | Budget period type                                                                                             | monthly                                                                                                        |
| `amount`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | Budget amount in USD for the specified period                                                                  | 250                                                                                                            |