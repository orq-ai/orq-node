# UpdateBudgetRequest

## Example Usage

```typescript
import { UpdateBudgetRequest } from "@orq-ai/node/models/operations";

let value: UpdateBudgetRequest = {
  id: "01K1J1AX8PGR63QRP7423NY008",
  requestBody: {
    budget: {
      period: "monthly",
      amount: 300,
    },
    isActive: true,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | 01K1J1AX8PGR63QRP7423NY008                                                               |
| `requestBody`                                                                            | [operations.UpdateBudgetRequestBody](../../models/operations/updatebudgetrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |