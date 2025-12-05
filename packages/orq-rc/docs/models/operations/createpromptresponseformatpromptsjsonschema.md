# CreatePromptResponseFormatPromptsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { CreatePromptResponseFormatPromptsJSONSchema } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseFormatPromptsJSONSchema = {
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
| `jsonSchema`                                                                                                                                   | [operations.CreatePromptResponseFormatPromptsRequestJsonSchema](../../models/operations/createpromptresponseformatpromptsrequestjsonschema.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |