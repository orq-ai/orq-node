# Http

## Example Usage

```typescript
import { Http } from "@orq-ai/node/models/operations";

let value: Http = {
  blueprint: {
    url: "https://weary-sprinkles.net",
    method: "POST",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.Blueprint](../../models/operations/blueprint.md)                                                                                                | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.Arguments](../../models/operations/arguments.md)>                                                                                | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |