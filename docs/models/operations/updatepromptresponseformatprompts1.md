# UpdatePromptResponseFormatPrompts1

## Example Usage

```typescript
import { UpdatePromptResponseFormatPrompts1 } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseFormatPrompts1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.UpdatePromptResponseFormatPromptsResponseType](../../models/operations/updatepromptresponseformatpromptsresponsetype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `jsonSchema`                                                                                                                         | [operations.UpdatePromptResponseFormatJsonSchema](../../models/operations/updatepromptresponseformatjsonschema.md)                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |