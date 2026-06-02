# CreateEvalGuardrailConfigEvalsRequestNumber

## Example Usage

```typescript
import { CreateEvalGuardrailConfigEvalsRequestNumber } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigEvalsRequestNumber = {
  type: "number",
  value: 7107.94,
  operator: "eq",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `alertOnFailure`                                                                                                                     | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `type`                                                                                                                               | *"number"*                                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `value`                                                                                                                              | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `operator`                                                                                                                           | [operations.CreateEvalGuardrailConfigEvalsRequestOperator](../../models/operations/createevalguardrailconfigevalsrequestoperator.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |