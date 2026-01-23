# GetAllPromptsResponseFormatPromptsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { GetAllPromptsResponseFormatPromptsJSONSchema } from "@orq-ai/node/models/operations";

let value: GetAllPromptsResponseFormatPromptsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | *"json_schema"*                                                                                                      | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `jsonSchema`                                                                                                         | [operations.GetAllPromptsResponseFormatJsonSchema](../../models/operations/getallpromptsresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |