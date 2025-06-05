# DataPython

## Example Usage

```typescript
import { DataPython } from "@orq-ai/node/models/operations";

let value: DataPython = {
  id: "<id>",
  description:
    "anenst gastropod partridge tuxedo without bleach except as blissfully",
  code: "<value>",
  type: "python_eval",
  key: "<key>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `created`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `updated`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `guardrailConfig`                                                                                    | *operations.GetEvalsDataEvalsGuardrailConfig*                                                        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `code`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [operations.GetEvalsDataEvalsResponseType](../../models/operations/getevalsdataevalsresponsetype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `key`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |