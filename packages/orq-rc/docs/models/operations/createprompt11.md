# CreatePrompt11

## Example Usage

```typescript
import { CreatePrompt11 } from "@orq-ai/node/models/operations";

let value: CreatePrompt11 = {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.CreatePrompt1PromptsResponseType](../../models/operations/createprompt1promptsresponsetype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `jsonSchema`                                                                                               | [operations.CreatePrompt1JsonSchema](../../models/operations/createprompt1jsonschema.md)                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |