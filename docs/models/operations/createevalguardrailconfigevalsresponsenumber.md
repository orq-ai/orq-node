# CreateEvalGuardrailConfigEvalsResponseNumber

## Example Usage

```typescript
import { CreateEvalGuardrailConfigEvalsResponseNumber } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigEvalsResponseNumber = {
  enabled: false,
  type: "number",
  value: 2054.81,
  operator: "ne",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                              | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `alertOnFailure`                                                                                                                       | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | *"number"*                                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `operator`                                                                                                                             | [operations.CreateEvalGuardrailConfigEvalsResponseOperator](../../models/operations/createevalguardrailconfigevalsresponseoperator.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |