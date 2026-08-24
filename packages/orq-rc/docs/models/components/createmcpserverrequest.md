# CreateMcpServerRequest

## Example Usage

```typescript
import { CreateMcpServerRequest } from "@orq-ai/node/models/components";

let value: CreateMcpServerRequest = {
  key: "<key>",
  displayName: "Clarissa.Beier27",
  connection: {
    type: "MCP_CONNECTION_TYPE_UNSPECIFIED",
    url: "https://deficient-permafrost.net/",
  },
  auth: {
    type: "MCP_AUTH_TYPE_PER_USER_OAUTH",
  },
  defaultToolExposure: {
    mode: "MCP_TOOL_EXPOSURE_MODE_NONE",
  },
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                               | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | Lowercase slug of letters, digits, hyphens and underscores, max 64 characters, unique per workspace; prefixes this server's tool names in gateways. |
| `displayName`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | Human readable name shown in the workspace.                                                                                                         |
| `description`                                                                                                                                       | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | Free-form note about what this server is for.                                                                                                       |
| `connection`                                                                                                                                        | [components.McpConnection](../../models/components/mcpconnection.md)                                                                                | :heavy_check_mark:                                                                                                                                  | How the gateway dials the upstream server.                                                                                                          |
| `auth`                                                                                                                                              | [components.McpAuthConfig](../../models/components/mcpauthconfig.md)                                                                                | :heavy_check_mark:                                                                                                                                  | Credentials the gateway sends upstream; send `type: NONE` explicitly for public servers.                                                            |
| `defaultToolExposure`                                                                                                                               | [components.McpToolExposure](../../models/components/mcptoolexposure.md)                                                                            | :heavy_check_mark:                                                                                                                                  | Fallback exposure used by any gateway link that does not set its own.                                                                               |
| `sharing`                                                                                                                                           | [components.Sharing](../../models/components/sharing.md)                                                                                            | :heavy_minus_sign:                                                                                                                                  | Which projects in the workspace may use this server. Defaults to every project.                                                                     |