# CreatePromptResponseFormat2

## Example Usage

```typescript
import { CreatePromptResponseFormat2 } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseFormat2 = {
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.CreatePromptResponseFormatPromptsResponse200Type](../../models/operations/createpromptresponseformatpromptsresponse200type.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `jsonSchema`                                                                                                                               | [operations.CreatePromptResponseFormatJsonSchema](../../models/operations/createpromptresponseformatjsonschema.md)                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |