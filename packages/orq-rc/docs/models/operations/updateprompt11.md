# UpdatePrompt11

## Example Usage

```typescript
import { UpdatePrompt11 } from "@orq-ai/node/models/operations";

let value: UpdatePrompt11 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [operations.UpdatePrompt1Type](../../models/operations/updateprompt1type.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `jsonSchema`                                                                 | [operations.OneJsonSchema](../../models/operations/onejsonschema.md)         | :heavy_check_mark:                                                           | N/A                                                                          |