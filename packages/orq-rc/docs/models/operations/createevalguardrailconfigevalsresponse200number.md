# CreateEvalGuardrailConfigEvalsResponse200Number

## Example Usage

```typescript
import { CreateEvalGuardrailConfigEvalsResponse200Number } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigEvalsResponse200Number = {
  enabled: false,
  type: "number",
  value: 1990.03,
  operator: "gt",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                    | *boolean*                                                                                                                                    | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `alertOnFailure`                                                                                                                             | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `type`                                                                                                                                       | *"number"*                                                                                                                                   | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `value`                                                                                                                                      | *number*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `operator`                                                                                                                                   | [operations.CreateEvalGuardrailConfigEvalsResponse200Operator](../../models/operations/createevalguardrailconfigevalsresponse200operator.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |