# CreateEvalGuardrailConfigEvalsNumber

## Example Usage

```typescript
import { CreateEvalGuardrailConfigEvalsNumber } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigEvalsNumber = {
  enabled: true,
  type: "number",
  value: 5525.08,
  operator: "lte",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                              | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `alertOnFailure`                                                                                                       | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *"number"*                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `value`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `operator`                                                                                                             | [operations.CreateEvalGuardrailConfigEvalsOperator](../../models/operations/createevalguardrailconfigevalsoperator.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |