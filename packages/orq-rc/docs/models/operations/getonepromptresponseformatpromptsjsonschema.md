# GetOnePromptResponseFormatPromptsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { GetOnePromptResponseFormatPromptsJSONSchema } from "@orq-ai/node/models/operations";

let value: GetOnePromptResponseFormatPromptsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | *"json_schema"*                                                                                                    | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `jsonSchema`                                                                                                       | [operations.GetOnePromptResponseFormatJsonSchema](../../models/operations/getonepromptresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |