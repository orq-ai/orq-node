# CreatePromptResponseFormatJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { CreatePromptResponseFormatJSONSchema } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseFormatJSONSchema = {
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
| `jsonSchema`                                                                                                                     | [operations.CreatePromptResponseFormatPromptsJsonSchema](../../models/operations/createpromptresponseformatpromptsjsonschema.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |