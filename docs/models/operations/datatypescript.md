# DataTypescript

## Example Usage

```typescript
import { DataTypescript } from "@orq-ai/node/models/operations";

let value: DataTypescript = {
  id: "<id>",
  description: "psst trench forceful",
  code: "<value>",
  type: "typescript_eval",
  key: "<key>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `created`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `updated`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `guardrailConfig`                                                                                          | *operations.GetEvalsDataEvalsResponse200GuardrailConfig*                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `code`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [operations.GetEvalsDataEvalsResponse200Type](../../models/operations/getevalsdataevalsresponse200type.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `key`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |