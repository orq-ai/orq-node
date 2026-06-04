# CreateEvalResponseBodyHTTP

## Example Usage

```typescript
import { CreateEvalResponseBodyHTTP } from "@orq-ai/node/models/operations";

let value: CreateEvalResponseBodyHTTP = {
  id: "<id>",
  description: "agile discontinue perspire fiercely nervously yahoo regarding",
  type: "http_eval",
  url: "https://far-flung-scholarship.org",
  method: "POST",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  payload: {
    "key": "<value>",
  },
  key: "<key>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `created`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `updated`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `updatedById`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `guardrailConfig`                                                                                  | *operations.CreateEvalResponseBodyGuardrailConfig*                                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.CreateEvalResponseBodyType](../../models/operations/createevalresponsebodytype.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `method`                                                                                           | [operations.CreateEvalResponseBodyMethod](../../models/operations/createevalresponsebodymethod.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `headers`                                                                                          | Record<string, *string*>                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `payload`                                                                                          | Record<string, *any*>                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `key`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |