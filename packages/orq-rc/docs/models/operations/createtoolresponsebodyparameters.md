# CreateToolResponseBodyParameters

The parameters the functions accepts, described as a JSON Schema object. See the `OpenAI` [guide](https://platform.openai.com/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.

## Example Usage

```typescript
import { CreateToolResponseBodyParameters } from "@orq-ai/node/models/operations";

let value: CreateToolResponseBodyParameters = {
  type: "object",
  properties: {},
  required: [],
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [operations.CreateToolResponseBodyToolsResponse200ApplicationJson5Type](../../models/operations/createtoolresponsebodytoolsresponse200applicationjson5type.md) | :heavy_check_mark:                                                                                                                                             | The type must be "object"                                                                                                                                      |
| `properties`                                                                                                                                                   | Record<string, *any*>                                                                                                                                          | :heavy_check_mark:                                                                                                                                             | The properties of the function parameters                                                                                                                      |
| `required`                                                                                                                                                     | *string*[]                                                                                                                                                     | :heavy_check_mark:                                                                                                                                             | Array of required parameter names                                                                                                                              |
| `additionalProperties`                                                                                                                                         | Record<string, *any*>                                                                                                                                          | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |