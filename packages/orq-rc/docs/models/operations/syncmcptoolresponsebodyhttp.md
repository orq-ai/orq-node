# SyncMcpToolResponseBodyHttp

## Example Usage

```typescript
import { SyncMcpToolResponseBodyHttp } from "@orq-ai/node/models/operations";

let value: SyncMcpToolResponseBodyHttp = {
  blueprint: {
    url: "https://grouchy-corral.biz/",
    method: "DELETE",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.SyncMcpToolResponseBodyBlueprint](../../models/operations/syncmcptoolresponsebodyblueprint.md)                                                  | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.SyncMcpToolResponseBodyArguments](../../models/operations/syncmcptoolresponsebodyarguments.md)>                                  | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |