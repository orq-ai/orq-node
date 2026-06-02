# GetEvalsGuardrailConfigNumber

## Example Usage

```typescript
import { GetEvalsGuardrailConfigNumber } from "@orq-ai/node/models/operations";

let value: GetEvalsGuardrailConfigNumber = {
  type: "number",
  value: 5670.9,
  operator: "gte",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `alertOnFailure`                                                                                         | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | *"number"*                                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `value`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `operator`                                                                                               | [operations.GetEvalsGuardrailConfigOperator](../../models/operations/getevalsguardrailconfigoperator.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |