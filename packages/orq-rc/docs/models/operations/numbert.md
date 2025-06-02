# NumberT

## Example Usage

```typescript
import { NumberT } from "@orq-ai/node/models/operations";

let value: NumberT = {
  enabled: false,
  type: "number",
  value: 3883.98,
  operator: "ne",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [operations.CreateEvalGuardrailConfigType](../../models/operations/createevalguardrailconfigtype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `value`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `operator`                                                                                           | [operations.Operator](../../models/operations/operator.md)                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |