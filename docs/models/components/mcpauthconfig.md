# McpAuthConfig

## Example Usage

```typescript
import { McpAuthConfig } from "@orq-ai/node/models/components";

let value: McpAuthConfig = {
  type: "MCP_AUTH_TYPE_PER_USER_OAUTH",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `type`                                                                                  | [components.McpAuthType](../../models/components/mcpauthtype.md)                        | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `staticHeaders`                                                                         | [components.McpHeaderSecret](../../models/components/mcpheadersecret.md)[]              | :heavy_minus_sign:                                                                      | Headers sent upstream on every request; at least one entry when type is STATIC_HEADERS. |
| `oauth`                                                                                 | [components.McpOAuthConfig](../../models/components/mcpoauthconfig.md)                  | :heavy_minus_sign:                                                                      | Not settable through these endpoints.                                                   |