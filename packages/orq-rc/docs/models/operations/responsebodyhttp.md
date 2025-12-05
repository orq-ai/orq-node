# ResponseBodyHTTP

## Example Usage

```typescript
import { ResponseBodyHTTP } from "@orq-ai/node/models/operations";

let value: ResponseBodyHTTP = {
  id: "<id>",
  description: "how which eek overload respectful clear",
  type: "http_eval",
  url: "https://terrible-backbone.info",
  method: "POST",
  headers: {},
  payload: {
    "key": "<value>",
    "key1": "<value>",
  },
  key: "<key>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `created`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `updated`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `guardrailConfig`                                                              | *operations.CreateEvalResponseBodyEvalsGuardrailConfig*                        | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *"http_eval"*                                                                  | :heavy_check_mark:                                                             | N/A                                                                            |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `method`                                                                       | [operations.ResponseBodyMethod](../../models/operations/responsebodymethod.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `headers`                                                                      | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `payload`                                                                      | Record<string, *any*>                                                          | :heavy_check_mark:                                                             | N/A                                                                            |
| `key`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |