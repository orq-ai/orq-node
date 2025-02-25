# UpdatePromptResponseFormat1

## Example Usage

```typescript
import { UpdatePromptResponseFormat1 } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseFormat1 = {
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.UpdatePromptResponseFormatPromptsType](../../models/operations/updatepromptresponseformatpromptstype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `jsonSchema`                                                                                                         | [operations.UpdatePromptResponseFormatJsonSchema](../../models/operations/updatepromptresponseformatjsonschema.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |