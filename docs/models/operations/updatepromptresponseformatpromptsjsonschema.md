# UpdatePromptResponseFormatPromptsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { UpdatePromptResponseFormatPromptsJSONSchema } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseFormatPromptsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | *"json_schema"*                                                                                                                                | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `jsonSchema`                                                                                                                                   | [operations.UpdatePromptResponseFormatPromptsRequestJsonSchema](../../models/operations/updatepromptresponseformatpromptsrequestjsonschema.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |