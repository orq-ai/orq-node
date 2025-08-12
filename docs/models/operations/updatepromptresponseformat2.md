# UpdatePromptResponseFormat2

## Example Usage

```typescript
import { UpdatePromptResponseFormat2 } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseFormat2 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.UpdatePromptResponseFormatPromptsType](../../models/operations/updatepromptresponseformatpromptstype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `jsonSchema`                                                                                                         | [operations.ResponseFormatJsonSchema](../../models/operations/responseformatjsonschema.md)                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |