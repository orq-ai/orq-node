# UpdatePromptResponseFormat1

## Example Usage

```typescript
import { UpdatePromptResponseFormat1 } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {},
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.UpdatePromptResponseFormatType](../../models/operations/updatepromptresponseformattype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `jsonSchema`                                                                                           | [operations.ResponseFormatJsonSchema](../../models/operations/responseformatjsonschema.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |