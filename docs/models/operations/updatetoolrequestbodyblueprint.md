# UpdateToolRequestBodyBlueprint

The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields.

## Example Usage

```typescript
import { UpdateToolRequestBodyBlueprint } from "@orq-ai/node/models/operations";

let value: UpdateToolRequestBodyBlueprint = {
  url: "https://usable-armchair.com/",
  method: "PUT",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `url`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | The URL to send the request to.                                                                  |
| `method`                                                                                         | [operations.UpdateToolRequestBodyMethod](../../models/operations/updatetoolrequestbodymethod.md) | :heavy_check_mark:                                                                               | The HTTP method to use.                                                                          |
| `headers`                                                                                        | Record<string, *string*>                                                                         | :heavy_minus_sign:                                                                               | The headers to send with the request.                                                            |
| `body`                                                                                           | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | The body to send with the request.                                                               |