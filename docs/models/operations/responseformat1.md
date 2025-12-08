# ResponseFormat1

## Example Usage

```typescript
import { ResponseFormat1 } from "@orq-ai/node/models/operations";

let value: ResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
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
| `type`                                                                                                             | [operations.CreatePromptResponseFormatType](../../models/operations/createpromptresponseformattype.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `jsonSchema`                                                                                                       | [operations.CreatePromptResponseFormatJsonSchema](../../models/operations/createpromptresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |