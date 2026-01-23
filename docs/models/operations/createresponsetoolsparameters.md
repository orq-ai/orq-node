# CreateResponseToolsParameters

The parameters the function accepts

## Example Usage

```typescript
import { CreateResponseToolsParameters } from "@orq-ai/node/models/operations";

let value: CreateResponseToolsParameters = {
  type: "object",
  properties: {
    "key": {
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                               | [operations.CreateResponseToolsRouterResponsesResponse200ApplicationJSONResponseBody1Type](../../models/operations/createresponsetoolsrouterresponsesresponse200applicationjsonresponsebody1type.md) | :heavy_check_mark:                                                                                                                                                                                   | The type of the parameters object                                                                                                                                                                    |
| `properties`                                                                                                                                                                                         | Record<string, [operations.ToolsProperties](../../models/operations/toolsproperties.md)>                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The parameters the function accepts, described as a JSON Schema object                                                                                                                               |
| `required`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                   | List of required parameter names                                                                                                                                                                     |
| `additionalProperties`                                                                                                                                                                               | *boolean*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                   | Whether to allow properties not defined in the schema                                                                                                                                                |