# RunAgentRequestToolHttp

## Example Usage

```typescript
import { RunAgentRequestToolHttp } from "@orq-ai/node/models/operations";

let value: RunAgentRequestToolHttp = {
  blueprint: {
    url: "https://flowery-knight.net",
    method: "GET",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.RunAgentRequestToolBlueprint](../../models/operations/runagentrequesttoolblueprint.md)                                                          | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.RunAgentRequestToolArguments](../../models/operations/runagentrequesttoolarguments.md)>                                          | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |