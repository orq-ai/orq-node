# FunctionParams3

## Example Usage

```typescript
import { FunctionParams3 } from "@orq-ai/node/models/operations";

let value: FunctionParams3 = {
  type: "contains_all",
  keywords: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.CreateEvalFunctionParamsEvalsType](../../models/operations/createevalfunctionparamsevalstype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `keywords`                                                                                                   | *string*[]                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |