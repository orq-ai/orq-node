# CreateEvalGuardrailConfigNumber

## Example Usage

```typescript
import { CreateEvalGuardrailConfigNumber } from "@orq-ai/node/models/operations";

let value: CreateEvalGuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 6592.55,
  operator: "gte",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                            | *boolean*                                                                                                                                            | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `type`                                                                                                                                               | [operations.CreateEvalGuardrailConfigEvalsRequestRequestBody3Type](../../models/operations/createevalguardrailconfigevalsrequestrequestbody3type.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `value`                                                                                                                                              | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `operator`                                                                                                                                           | [operations.CreateEvalGuardrailConfigOperator](../../models/operations/createevalguardrailconfigoperator.md)                                         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |