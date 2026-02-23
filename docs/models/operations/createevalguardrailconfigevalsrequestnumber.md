# CreateEvalGuardrailConfigEvalsRequestNumber

## Example Usage

```typescript
import { CreateEvalGuardrailConfigEvalsRequestNumber } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigEvalsRequestNumber = {
  enabled: false,
  type: "number",
  value: 1153.09,
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
| `operator`                                                                                                                           | [operations.CreateEvalGuardrailConfigEvalsRequestOperator](../../models/operations/createevalguardrailconfigevalsrequestoperator.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |