# CreatePromptResponseFormat1

## Example Usage

```typescript
import { CreatePromptResponseFormat1 } from "@orq-ai/node/models/operations";

let value: CreatePromptResponseFormat1 = {
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.CreatePromptResponseFormatType](../../models/operations/createpromptresponseformattype.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `jsonSchema`                                                                                                       | [operations.CreatePromptResponseFormatJsonSchema](../../models/operations/createpromptresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |