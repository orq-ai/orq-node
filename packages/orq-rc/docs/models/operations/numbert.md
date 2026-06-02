# NumberT

## Example Usage

```typescript
import { NumberT } from "@orq-ai/node/models/operations";

let value: NumberT = {
  type: "number",
  value: 3883.98,
  operator: "ne",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `alertOnFailure`                                           | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | *"number"*                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `value`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `operator`                                                 | [operations.Operator](../../models/operations/operator.md) | :heavy_check_mark:                                         | N/A                                                        |