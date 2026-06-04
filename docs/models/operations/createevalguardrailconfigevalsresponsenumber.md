# CreateEvalGuardrailConfigEvalsResponseNumber

## Example Usage

```typescript
import { CreateEvalGuardrailConfigEvalsResponseNumber } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigEvalsResponseNumber = {
  type: "number",
  value: 5135.09,
  operator: "ne",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                              | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `alertOnFailure`                                                                                                                       | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | *"number"*                                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `operator`                                                                                                                             | [operations.CreateEvalGuardrailConfigEvalsResponseOperator](../../models/operations/createevalguardrailconfigevalsresponseoperator.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |