# UpdateToolResponseBodySchema

The schema for the response format, described as a JSON Schema object. See the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.

## Example Usage

```typescript
import { UpdateToolResponseBodySchema } from "@orq-ai/node/models/operations";

let value: UpdateToolResponseBodySchema = {
  type: "<value>",
  properties: {
    "key": "<value>",
  },
  required: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `type`                                   | *string*                                 | :heavy_check_mark:                       | The JSON Schema type                     |
| `properties`                             | Record<string, *any*>                    | :heavy_check_mark:                       | The properties of the JSON Schema object |
| `required`                               | *string*[]                               | :heavy_check_mark:                       | Array of required property names         |
| `additionalProperties`                   | Record<string, *any*>                    | :heavy_minus_sign:                       | N/A                                      |