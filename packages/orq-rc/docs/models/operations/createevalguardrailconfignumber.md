# CreateEvalGuardrailConfigNumber

## Example Usage

```typescript
import { CreateEvalGuardrailConfigNumber } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigNumber = {
  type: "number",
  value: 6592.55,
  operator: "gte",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                                    | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `alertOnFailure`                                                                                             | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *"number"*                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `value`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `operator`                                                                                                   | [operations.CreateEvalGuardrailConfigOperator](../../models/operations/createevalguardrailconfigoperator.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |