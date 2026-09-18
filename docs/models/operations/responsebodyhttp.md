# ResponseBodyHttp

## Example Usage

```typescript
import { ResponseBodyHttp } from "@orq-ai/node/models/operations";

let value: ResponseBodyHttp = {
  blueprint: {
    url: "https://impartial-wombat.name",
    method: "PUT",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.ResponseBodyBlueprint](../../models/operations/responsebodyblueprint.md)                                                                        | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.ResponseBodyArguments](../../models/operations/responsebodyarguments.md)>                                                        | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |