# EvaluatorResponsePythonGuardrailConfigNumber

## Example Usage

```typescript
import { EvaluatorResponsePythonGuardrailConfigNumber } from "@orq-ai/node/models/components";

let value: EvaluatorResponsePythonGuardrailConfigNumber = {
  type: "number",
  value: 2663.03,
  operator: "gte",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                              | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `alertOnFailure`                                                                                                                       | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | *"number"*                                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `operator`                                                                                                                             | [components.EvaluatorResponsePythonGuardrailConfigOperator](../../models/components/evaluatorresponsepythonguardrailconfigoperator.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |