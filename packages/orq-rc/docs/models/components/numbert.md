# NumberT

## Example Usage

```typescript
import { NumberT } from "@orq-ai/node/models/components";

let value: NumberT = {
  type: "number",
  value: 3883.98,
  operator: "ne",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `enabled`                                                  | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `alertOnFailure`                                           | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | *"number"*                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `value`                                                    | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `operator`                                                 | [components.Operator](../../models/components/operator.md) | :heavy_check_mark:                                         | N/A                                                        |