# UpdateEvalGuardrailConfigNumber

## Example Usage

```typescript
import { UpdateEvalGuardrailConfigNumber } from "@orq-ai/node/models/operations";

let value: UpdateEvalGuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 5351.48,
  operator: "ne",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `alertOnFailure`                                                                                             | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *"number"*                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `value`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `operator`                                                                                                   | [operations.UpdateEvalGuardrailConfigOperator](../../models/operations/updateevalguardrailconfigoperator.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |