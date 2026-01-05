# GuardrailConfigNumber

## Example Usage

```typescript
import { GuardrailConfigNumber } from "@orq-ai/node/models/operations";

let value: GuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 1669.19,
  operator: "lte",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `alertOnFailure`                                                                         | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `type`                                                                                   | *"number"*                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `value`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `operator`                                                                               | [operations.GuardrailConfigOperator](../../models/operations/guardrailconfigoperator.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |