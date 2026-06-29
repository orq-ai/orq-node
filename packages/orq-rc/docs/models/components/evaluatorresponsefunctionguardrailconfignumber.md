# EvaluatorResponseFunctionGuardrailConfigNumber

## Example Usage

```typescript
import { EvaluatorResponseFunctionGuardrailConfigNumber } from "@orq-ai/node/models/components";

let value: EvaluatorResponseFunctionGuardrailConfigNumber = {
  type: "number",
  value: 6232.72,
  operator: "gt",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                                                                  | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `alertOnFailure`                                                                                                                           | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `type`                                                                                                                                     | *"number"*                                                                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `value`                                                                                                                                    | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `operator`                                                                                                                                 | [components.EvaluatorResponseFunctionGuardrailConfigOperator](../../models/components/evaluatorresponsefunctionguardrailconfigoperator.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |