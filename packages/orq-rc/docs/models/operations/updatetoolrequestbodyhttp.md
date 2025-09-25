# UpdateToolRequestBodyHttp

## Example Usage

```typescript
import { UpdateToolRequestBodyHttp } from "@orq-ai/node/models/operations";

let value: UpdateToolRequestBodyHttp = {
  blueprint: {
    url: "https://sniveling-caption.biz/",
    method: "POST",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.UpdateToolRequestBodyBlueprint](../../models/operations/updatetoolrequestbodyblueprint.md)                                                      | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.UpdateToolRequestBodyArguments](../../models/operations/updatetoolrequestbodyarguments.md)>                                      | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |