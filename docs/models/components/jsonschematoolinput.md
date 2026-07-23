# JsonSchemaToolInput

Enforces structured output format using JSON Schema. Must reference a pre-created JSON Schema tool by key or id.

## Example Usage

```typescript
import { JsonSchemaToolInput } from "@orq-ai/node/models/components";

let value: JsonSchemaToolInput = {
  type: "json_schema",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"json_schema"*                                      | :heavy_check_mark:                                   | JSON Schema tool type                                |
| `key`                                                | *string*                                             | :heavy_minus_sign:                                   | The key of the pre-created JSON Schema tool          |
| `id`                                                 | *string*                                             | :heavy_minus_sign:                                   | The ID of the pre-created JSON Schema tool           |
| `requiresApproval`                                   | *boolean*                                            | :heavy_minus_sign:                                   | Whether this tool requires approval before execution |