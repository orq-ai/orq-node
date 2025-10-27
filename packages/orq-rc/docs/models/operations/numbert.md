# NumberT

## Example Usage

```typescript
import { NumberT } from "@orq-ai/node/models/operations";

let value: NumberT = {
  enabled: true,
  type: "number",
  value: 3019.07,
  operator: "gte",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [operations.GuardrailConfigType](../../models/operations/guardrailconfigtype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `operator`                                                                       | [operations.Operator](../../models/operations/operator.md)                       | :heavy_check_mark:                                                               | N/A                                                                              |