# CreateToolRequestBodyHttp

## Example Usage

```typescript
import { CreateToolRequestBodyHttp } from "@orq-ai/node/models/operations";

let value: CreateToolRequestBodyHttp = {
  blueprint: {
    url: "https://hefty-gazebo.com",
    method: "POST",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blueprint`                                                                                                                                                 | [operations.RequestBodyBlueprint](../../models/operations/requestbodyblueprint.md)                                                                          | :heavy_check_mark:                                                                                                                                          | The blueprint for the HTTP request. The `arguments` field will be used to replace the placeholders in the `url`, `headers`, `body`, and `arguments` fields. |
| `arguments`                                                                                                                                                 | Record<string, [operations.RequestBodyArguments](../../models/operations/requestbodyarguments.md)>                                                          | :heavy_minus_sign:                                                                                                                                          | The arguments to send with the request. The keys will be used to replace the placeholders in the `blueprint` field.                                         |