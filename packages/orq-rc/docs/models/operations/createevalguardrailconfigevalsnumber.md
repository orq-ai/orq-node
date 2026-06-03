# CreateEvalGuardrailConfigEvalsNumber

## Example Usage

```typescript
import { CreateEvalGuardrailConfigEvalsNumber } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigEvalsNumber = {
  type: "number",
  value: 2626.43,
  operator: "gte",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                              | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `alertOnFailure`                                                                                                       | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *"number"*                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `value`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `operator`                                                                                                             | [operations.CreateEvalGuardrailConfigEvalsOperator](../../models/operations/createevalguardrailconfigevalsoperator.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |