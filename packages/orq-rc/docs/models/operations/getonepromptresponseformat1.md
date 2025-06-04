# GetOnePromptResponseFormat1

## Example Usage

```typescript
import { GetOnePromptResponseFormat1 } from "@orq-ai/node/models/operations";

let value: GetOnePromptResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    strict: true,
    schema: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.GetOnePromptResponseFormatType](../../models/operations/getonepromptresponseformattype.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `jsonSchema`                                                                                                       | [operations.GetOnePromptResponseFormatJsonSchema](../../models/operations/getonepromptresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |