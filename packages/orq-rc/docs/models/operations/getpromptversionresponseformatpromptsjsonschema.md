# GetPromptVersionResponseFormatPromptsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { GetPromptVersionResponseFormatPromptsJSONSchema } from "@orq-ai/node/models/operations";

let value: GetPromptVersionResponseFormatPromptsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | *"json_schema"*                                                                                                            | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `jsonSchema`                                                                                                               | [operations.GetPromptVersionResponseFormatJsonSchema](../../models/operations/getpromptversionresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |