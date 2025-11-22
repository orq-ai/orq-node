# CreatePromptResponseFormat1

## Example Usage

```typescript
import { CreatePromptResponseFormat1 } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [operations.CreatePromptResponseFormatPromptsResponseType](../../models/operations/createpromptresponseformatpromptsresponsetype.md)             | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `displayName`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `jsonSchema`                                                                                                                                     | [operations.CreatePromptResponseFormatPromptsResponseJsonSchema](../../models/operations/createpromptresponseformatpromptsresponsejsonschema.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |