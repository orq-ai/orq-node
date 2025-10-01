# GetAllToolsDataHttp

## Example Usage

```typescript
import { GetAllToolsDataHttp } from "@orq-ai/node/models/operations";

let value: GetAllToolsDataHttp = {
  blueprint: {
    url: "https://impassioned-charm.net/",
    method: "DELETE",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.DataBlueprint](../../models/operations/datablueprint.md)                                                                                        | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.DataArguments](../../models/operations/dataarguments.md)>                                                                        | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |