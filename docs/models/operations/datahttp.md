# DataHTTP

## Example Usage

```typescript
import { DataHTTP } from "@orq-ai/node/models/operations";

let value: DataHTTP = {
  id: "<id>",
  description: "queasy incidentally neatly tall necessary",
  type: "http_eval",
  url: "https://majestic-alert.biz/",
  method: "GET",
  headers: {
    "key": "<value>",
  },
  payload: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  key: "<key>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `created`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `updated`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `guardrailConfig`                                              | *operations.GetEvalsDataGuardrailConfig*                       | :heavy_minus_sign:                                             | N/A                                                            |
| `type`                                                         | *"http_eval"*                                                  | :heavy_check_mark:                                             | N/A                                                            |
| `url`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `method`                                                       | [operations.DataMethod](../../models/operations/datamethod.md) | :heavy_check_mark:                                             | N/A                                                            |
| `headers`                                                      | Record<string, *string*>                                       | :heavy_check_mark:                                             | N/A                                                            |
| `payload`                                                      | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |
| `key`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |