# EvaluatorResponseTypescriptGuardrailConfigNumber

## Example Usage

```typescript
import { EvaluatorResponseTypescriptGuardrailConfigNumber } from "@orq-ai/node/models/components";

let value: EvaluatorResponseTypescriptGuardrailConfigNumber = {
  type: "number",
  value: 4351.31,
  operator: "gte",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                      | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `alertOnFailure`                                                                                                                               | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `type`                                                                                                                                         | *"number"*                                                                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `value`                                                                                                                                        | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `operator`                                                                                                                                     | [components.EvaluatorResponseTypescriptGuardrailConfigOperator](../../models/components/evaluatorresponsetypescriptguardrailconfigoperator.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |