# ResponseBodyJSON

## Example Usage

```typescript
import { ResponseBodyJSON } from "@orq-ai/node/models/operations";

let value: ResponseBodyJSON = {
  id: "<id>",
  description: "qua but till diagram",
  type: "json_schema",
  schema: "<value>",
  key: "<key>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `created`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `updated`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `guardrailConfig`                                                          | *operations.ResponseBodyGuardrailConfig*                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | [operations.ResponseBodyType](../../models/operations/responsebodytype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `schema`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `key`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |