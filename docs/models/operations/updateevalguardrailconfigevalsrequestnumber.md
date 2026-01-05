# UpdateEvalGuardrailConfigEvalsRequestNumber

## Example Usage

```typescript
import { UpdateEvalGuardrailConfigEvalsRequestNumber } from "@orq-ai/node/models/operations";

let value: UpdateEvalGuardrailConfigEvalsRequestNumber = {
  enabled: true,
  type: "number",
  value: 3598.06,
  operator: "ne",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                                                            | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `alertOnFailure`                                                                                                                     | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | *"number"*                                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `operator`                                                                                                                           | [operations.UpdateEvalGuardrailConfigEvalsRequestOperator](../../models/operations/updateevalguardrailconfigevalsrequestoperator.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |