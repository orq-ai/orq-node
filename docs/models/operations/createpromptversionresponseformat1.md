# CreatePromptVersionResponseFormat1

## Example Usage

```typescript
import { CreatePromptVersionResponseFormat1 } from "@orq-ai/node/models/operations";

let value: CreatePromptVersionResponseFormat1 = {
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.CreatePromptVersionResponseFormatType](../../models/operations/createpromptversionresponseformattype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `jsonSchema`                                                                                                         | [operations.ResponseFormatJsonSchema](../../models/operations/responseformatjsonschema.md)                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |