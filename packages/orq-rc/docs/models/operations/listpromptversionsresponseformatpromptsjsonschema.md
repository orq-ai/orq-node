# ListPromptVersionsResponseFormatPromptsJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { ListPromptVersionsResponseFormatPromptsJSONSchema } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsResponseFormatPromptsJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | *"json_schema"*                                                                                                                | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `jsonSchema`                                                                                                                   | [operations.ListPromptVersionsResponseFormatJsonSchema](../../models/operations/listpromptversionsresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |