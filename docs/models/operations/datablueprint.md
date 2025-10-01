# DataBlueprint

The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields.

## Example Usage

```typescript
import { DataBlueprint } from "@orq-ai/node/models/operations";

let value: DataBlueprint = {
  url: "https://perfumed-pearl.info/",
  method: "DELETE",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | The URL to send the request to.                                                      |
| `method`                                                                             | [operations.GetAllToolsDataMethod](../../models/operations/getalltoolsdatamethod.md) | :heavy_check_mark:                                                                   | The HTTP method to use.                                                              |
| `headers`                                                                            | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | The headers to send with the request.                                                |
| `body`                                                                               | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | The body to send with the request.                                                   |