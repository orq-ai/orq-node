# DataFunction

## Example Usage

```typescript
import { DataFunction } from "@orq-ai/node/models/operations";

let value: DataFunction = {
  id: "<id>",
  description: "down at for gee excitable huzzah acidic provided hmph",
  type: "function_eval",
  functionParams: {
    type: "levenshtein_distance",
  },
  key: "<key>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `created`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `updated`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `guardrailConfig`                                                                    | *operations.GetEvalsDataEvalsGuardrailConfig*                                        | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `type`                                                                               | [operations.GetEvalsDataEvalsType](../../models/operations/getevalsdataevalstype.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `functionParams`                                                                     | *operations.DataFunctionParams*                                                      | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `key`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |