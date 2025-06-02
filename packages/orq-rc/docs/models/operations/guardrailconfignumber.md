# GuardrailConfigNumber

## Example Usage

```typescript
import { GuardrailConfigNumber } from "@orq-ai/node/models/operations";

let value: GuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 8372.37,
  operator: "ne",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                    | *boolean*                                                                                                                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `type`                                                                                                                       | [operations.CreateEvalGuardrailConfigEvalsRequestType](../../models/operations/createevalguardrailconfigevalsrequesttype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `value`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `operator`                                                                                                                   | [operations.GuardrailConfigOperator](../../models/operations/guardrailconfigoperator.md)                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |