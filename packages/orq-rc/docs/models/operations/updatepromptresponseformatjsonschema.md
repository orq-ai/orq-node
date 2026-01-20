# UpdatePromptResponseFormatJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { UpdatePromptResponseFormatJSONSchema } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | *"json_schema"*                                                                                                                  | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `jsonSchema`                                                                                                                     | [operations.UpdatePromptResponseFormatPromptsJsonSchema](../../models/operations/updatepromptresponseformatpromptsjsonschema.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |