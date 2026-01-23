# CreateChatCompletionResponseFormatJSONSchema



JSON Schema response format. Used to generate structured JSON responses

## Example Usage

```typescript
import { CreateChatCompletionResponseFormatJSONSchema } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionResponseFormatJSONSchema = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | *"json_schema"*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `jsonSchema`                                                                                                                                                                 | [operations.CreateChatCompletionResponseFormatRouterChatCompletionsJsonSchema](../../models/operations/createchatcompletionresponseformatrouterchatcompletionsjsonschema.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |