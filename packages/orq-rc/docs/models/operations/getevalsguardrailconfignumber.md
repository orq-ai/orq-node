# GetEvalsGuardrailConfigNumber

## Example Usage

```typescript
import { GetEvalsGuardrailConfigNumber } from "@orq-ai/node/models/operations";

let value: GetEvalsGuardrailConfigNumber = {
  enabled: false,
  type: "number",
  value: 5875.17,
  operator: "lt",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"number"*                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `value`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `operator`                                                                                               | [operations.GetEvalsGuardrailConfigOperator](../../models/operations/getevalsguardrailconfigoperator.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |