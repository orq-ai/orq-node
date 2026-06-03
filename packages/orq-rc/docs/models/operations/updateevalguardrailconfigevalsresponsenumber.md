# UpdateEvalGuardrailConfigEvalsResponseNumber

## Example Usage

```typescript
import { UpdateEvalGuardrailConfigEvalsResponseNumber } from "@orq-ai/node/models/operations";

let value: UpdateEvalGuardrailConfigEvalsResponseNumber = {
  type: "number",
  value: 8209.06,
  operator: "lte",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                              | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `alertOnFailure`                                                                                                                       | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `type`                                                                                                                                 | *"number"*                                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `operator`                                                                                                                             | [operations.UpdateEvalGuardrailConfigEvalsResponseOperator](../../models/operations/updateevalguardrailconfigevalsresponseoperator.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |