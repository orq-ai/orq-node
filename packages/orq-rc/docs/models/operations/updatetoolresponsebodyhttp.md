# UpdateToolResponseBodyHttp

## Example Usage

```typescript
import { UpdateToolResponseBodyHttp } from "@orq-ai/node/models/operations";

let value: UpdateToolResponseBodyHttp = {
  blueprint: {
    url: "https://powerless-sightseeing.org/",
    method: "GET",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.UpdateToolResponseBodyBlueprint](../../models/operations/updatetoolresponsebodyblueprint.md)                                                    | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.UpdateToolResponseBodyArguments](../../models/operations/updatetoolresponsebodyarguments.md)>                                    | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |