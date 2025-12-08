# UpdateToolResponseBodyBlueprint

The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields.

## Example Usage

```typescript
import { UpdateToolResponseBodyBlueprint } from "@orq-ai/node/models/operations";

let value: UpdateToolResponseBodyBlueprint = {
  url: "https://prickly-stir-fry.net/",
  method: "POST",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                         | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The URL to send the request to.                                                                               |
| `method`                                                                                                      | [operations.UpdateToolResponseBodyMethod](../../models/operations/updatetoolresponsebodymethod.md)            | :heavy_check_mark:                                                                                            | The HTTP method to use.                                                                                       |
| `headers`                                                                                                     | Record<string, *operations.UpdateToolResponseBodyToolsHeaders*>                                               | :heavy_minus_sign:                                                                                            | The headers to send with the request. Can be a string value or an object with value and encrypted properties. |
| `body`                                                                                                        | Record<string, *any*>                                                                                         | :heavy_minus_sign:                                                                                            | The body to send with the request.                                                                            |