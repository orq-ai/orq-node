# CreatePromptResponseFormatPrompts1

## Example Usage

```typescript
import { CreatePromptResponseFormatPrompts1 } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseFormatPrompts1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    strict: false,
    schema: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.CreatePromptResponseFormatPromptsResponseType](../../models/operations/createpromptresponseformatpromptsresponsetype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `jsonSchema`                                                                                                                         | [operations.CreatePromptResponseFormatPromptsJsonSchema](../../models/operations/createpromptresponseformatpromptsjsonschema.md)     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |