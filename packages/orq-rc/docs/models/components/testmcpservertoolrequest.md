# TestMcpServerToolRequest

## Example Usage

```typescript
import { TestMcpServerToolRequest } from "@orq-ai/node/models/components";

let value: TestMcpServerToolRequest = {
  toolName: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `toolName`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | Bare upstream tool name, not a gateway's namespaced `exposed_name`.                   |
| `arguments`                                                                           | [components.Arguments](../../models/components/arguments.md)                          | :heavy_minus_sign:                                                                    | Arguments passed to the tool, matching its `input_schema`.                            |
| `discoveryVariables`                                                                  | Record<string, *string*>                                                              | :heavy_minus_sign:                                                                    | Values for the server's `template_variables`; treated as sensitive and not persisted. |