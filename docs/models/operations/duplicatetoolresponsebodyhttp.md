# DuplicateToolResponseBodyHttp

## Example Usage

```typescript
import { DuplicateToolResponseBodyHttp } from "@orq-ai/node/models/operations";

let value: DuplicateToolResponseBodyHttp = {
  blueprint: {
    url: "https://lighthearted-sprinkles.info/",
    method: "GET",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.DuplicateToolResponseBodyBlueprint](../../models/operations/duplicatetoolresponsebodyblueprint.md)                                              | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.DuplicateToolResponseBodyArguments](../../models/operations/duplicatetoolresponsebodyarguments.md)>                              | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |