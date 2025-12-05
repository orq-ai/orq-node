# UpdateEvalResponseBodyHTTP

## Example Usage

```typescript
import { UpdateEvalResponseBodyHTTP } from "@orq-ai/node/models/operations";

let value: UpdateEvalResponseBodyHTTP = {
  id: "<id>",
  description: "carefully beyond ack excluding clearly",
  type: "http_eval",
  url: "https://deserted-horst.name",
  method: "GET",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  payload: {},
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
| `guardrailConfig`                                                                                  | *operations.UpdateEvalResponseBodyEvalsResponseGuardrailConfig*                                    | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | *"http_eval"*                                                                                      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `method`                                                                                           | [operations.UpdateEvalResponseBodyMethod](../../models/operations/updateevalresponsebodymethod.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `headers`                                                                                          | Record<string, *string*>                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `payload`                                                                                          | Record<string, *any*>                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `key`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |