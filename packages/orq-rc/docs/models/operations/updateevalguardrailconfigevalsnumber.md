# UpdateEvalGuardrailConfigEvalsNumber

## Example Usage

```typescript
import { UpdateEvalGuardrailConfigEvalsNumber } from "@orq-ai/node/models/operations";

let value: UpdateEvalGuardrailConfigEvalsNumber = {
  enabled: false,
  type: "number",
  value: 9944.67,
  operator: "gte",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                              | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `alertOnFailure`                                                                                                       | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *"number"*                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `value`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `operator`                                                                                                             | [operations.UpdateEvalGuardrailConfigEvalsOperator](../../models/operations/updateevalguardrailconfigevalsoperator.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |