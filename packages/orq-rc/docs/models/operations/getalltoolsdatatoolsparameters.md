# GetAllToolsDataToolsParameters

The parameters the functions accepts, described as a JSON Schema object. See the `OpenAI` [guide](https://platform.openai.com/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.

## Example Usage

```typescript
import { GetAllToolsDataToolsParameters } from "@orq-ai/node/models/operations";

let value: GetAllToolsDataToolsParameters = {
  type: "object",
  properties: {
    "key": "<value>",
    "key1": "<value>",
  },
  required: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [operations.GetAllToolsDataToolsResponse200ApplicationJSONResponseBody5Type](../../models/operations/getalltoolsdatatoolsresponse200applicationjsonresponsebody5type.md) | :heavy_check_mark:                                                                                                                                                       | The type must be "object"                                                                                                                                                |
| `properties`                                                                                                                                                             | Record<string, *any*>                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                       | The properties of the function parameters                                                                                                                                |
| `required`                                                                                                                                                               | *string*[]                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                       | Array of required parameter names                                                                                                                                        |
| `additionalProperties`                                                                                                                                                   | Record<string, *any*>                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |