# UpdatePromptSnippetResponseFormat1

## Example Usage

```typescript
import { UpdatePromptSnippetResponseFormat1 } from "@orq-ai/node/models/operations";

let value: UpdatePromptSnippetResponseFormat1 = {
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
| `type`                                                                                                               | [operations.UpdatePromptSnippetResponseFormatType](../../models/operations/updatepromptsnippetresponseformattype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `jsonSchema`                                                                                                         | [operations.ResponseFormatJsonSchema](../../models/operations/responseformatjsonschema.md)                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |