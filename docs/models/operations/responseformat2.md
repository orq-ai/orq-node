# ResponseFormat2

## Example Usage

```typescript
import { ResponseFormat2 } from "@orq-ai/node/models/operations";

let value: ResponseFormat2 = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.CreatePromptResponseFormatType](../../models/operations/createpromptresponseformattype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `jsonSchema`                                                                                           | [operations.JsonSchema](../../models/operations/jsonschema.md)                                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |