# Blueprint

The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields.

## Example Usage

```typescript
import { Blueprint } from "@orq-ai/node/models/operations";

let value: Blueprint = {
  url: "https://unlawful-yeast.com/",
  method: "PUT",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                         | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The URL to send the request to.                                                                               |
| `method`                                                                                                      | [operations.Method](../../models/operations/method.md)                                                        | :heavy_check_mark:                                                                                            | The HTTP method to use.                                                                                       |
| `headers`                                                                                                     | Record<string, *operations.Headers*>                                                                          | :heavy_minus_sign:                                                                                            | The headers to send with the request. Can be a string value or an object with value and encrypted properties. |
| `body`                                                                                                        | Record<string, *any*>                                                                                         | :heavy_minus_sign:                                                                                            | The body to send with the request.                                                                            |