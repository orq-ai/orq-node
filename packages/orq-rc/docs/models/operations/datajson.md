# DataJSON

## Example Usage

```typescript
import { DataJSON } from "@orq-ai/node/models/operations";

let value: DataJSON = {
  id: "<id>",
  description: "absent unaccountably anenst hunt floodlight",
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
| `guardrailConfig`                                                          | *operations.DataGuardrailConfig*                                           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `type`                                                                     | [operations.GetEvalsDataType](../../models/operations/getevalsdatatype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `schema`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `key`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |