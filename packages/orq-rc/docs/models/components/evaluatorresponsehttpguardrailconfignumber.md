# EvaluatorResponseHttpGuardrailConfigNumber

## Example Usage

```typescript
import { EvaluatorResponseHttpGuardrailConfigNumber } from "@orq-ai/node/models/components";

let value: EvaluatorResponseHttpGuardrailConfigNumber = {
  type: "number",
  value: 3048.86,
  operator: "lt",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                          | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `alertOnFailure`                                                                                                                   | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `type`                                                                                                                             | *"number"*                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `operator`                                                                                                                         | [components.EvaluatorResponseHttpGuardrailConfigOperator](../../models/components/evaluatorresponsehttpguardrailconfigoperator.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |