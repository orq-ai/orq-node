# FormatJSONSchema

## Example Usage

```typescript
import { FormatJSONSchema } from "@orq-ai/node/models/operations";

let value: FormatJSONSchema = {
  type: "json_schema",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `schema`                                                           | [operations.FormatSchema](../../models/operations/formatschema.md) | :heavy_minus_sign:                                                 | The JSON Schema the output must conform to.                        |
| `strict`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `type`                                                             | *"json_schema"*                                                    | :heavy_check_mark:                                                 | N/A                                                                |