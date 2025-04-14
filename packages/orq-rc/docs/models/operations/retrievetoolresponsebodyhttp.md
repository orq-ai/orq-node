# RetrieveToolResponseBodyHttp

## Example Usage

```typescript
import { RetrieveToolResponseBodyHttp } from "@orq-ai/node/models/operations";

let value: RetrieveToolResponseBodyHttp = {
  blueprint: {
    url: "https://shimmering-hexagon.net",
    method: "GET",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.RetrieveToolResponseBodyBlueprint](../../models/operations/retrievetoolresponsebodyblueprint.md)                                                | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.RetrieveToolResponseBodyArguments](../../models/operations/retrievetoolresponsebodyarguments.md)>                                | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |