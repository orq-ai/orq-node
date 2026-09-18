# McpAuthConfigOutput

## Example Usage

```typescript
import { McpAuthConfigOutput } from "@orq-ai/node/models/components";

let value: McpAuthConfigOutput = {
  type: "MCP_AUTH_TYPE_OAUTH_CLIENT_CREDENTIALS",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `type`                                                                                  | [components.McpAuthType](../../models/components/mcpauthtype.md)                        | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `staticHeaders`                                                                         | [components.McpHeaderSecretOutput](../../models/components/mcpheadersecretoutput.md)[]  | :heavy_minus_sign:                                                                      | Headers sent upstream on every request; at least one entry when type is STATIC_HEADERS. |
| `oauth`                                                                                 | [components.McpOAuthConfigOutput](../../models/components/mcpoauthconfigoutput.md)      | :heavy_minus_sign:                                                                      | Not settable through these endpoints.                                                   |