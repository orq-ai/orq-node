# GuardrailConfigNumber

## Example Usage

```typescript
import { GuardrailConfigNumber } from "@orq-ai/node/models/components";

let value: GuardrailConfigNumber = {
  type: "number",
  value: 8372.37,
  operator: "ne",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `alertOnFailure`                                                                         | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `type`                                                                                   | *"number"*                                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `value`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `operator`                                                                               | [components.GuardrailConfigOperator](../../models/components/guardrailconfigoperator.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |