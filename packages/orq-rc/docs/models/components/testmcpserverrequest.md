# TestMcpServerRequest

## Example Usage

```typescript
import { TestMcpServerRequest } from "@orq-ai/node/models/components";

let value: TestMcpServerRequest = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `connection`                                                                          | [components.McpConnection](../../models/components/mcpconnection.md)                  | :heavy_minus_sign:                                                                    | Connection to probe. Omit when `id` is set.                                           |
| `auth`                                                                                | [components.McpAuthConfig](../../models/components/mcpauthconfig.md)                  | :heavy_minus_sign:                                                                    | Credentials to probe with. Omit when `id` is set.                                     |
| `id`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | Probe a stored server instead of sending `connection` and `auth`.                     |
| `discoveryVariables`                                                                  | Record<string, *string*>                                                              | :heavy_minus_sign:                                                                    | Values for the server's `template_variables`; treated as sensitive and not persisted. |