# UpdateEvalGuardrailConfigNumber

## Example Usage

```typescript
import { UpdateEvalGuardrailConfigNumber } from "@orq-ai/node/models/operations";

let value: UpdateEvalGuardrailConfigNumber = {
  type: "number",
  value: 8160.55,
  operator: "gte",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `alertOnFailure`                                                                                             | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *"number"*                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `value`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `operator`                                                                                                   | [operations.UpdateEvalGuardrailConfigOperator](../../models/operations/updateevalguardrailconfigoperator.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |