# AgentToolInputRunHttp

## Example Usage

```typescript
import { AgentToolInputRunHttp } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunHttp = {
  blueprint: {
    url: "https://uniform-draw.org/",
    method: "DELETE",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.AgentToolInputRunBlueprint](../../models/operations/agenttoolinputrunblueprint.md)                                                              | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.AgentToolInputRunArguments](../../models/operations/agenttoolinputrunarguments.md)>                                              | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |