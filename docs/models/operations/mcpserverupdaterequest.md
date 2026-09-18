# McpServerUpdateRequest

## Example Usage

```typescript
import { McpServerUpdateRequest } from "@orq-ai/node/models/operations";

let value: McpServerUpdateRequest = {
  id: "<id>",
  updateMcpServerRequest: {
    connection: {
      type: "MCP_CONNECTION_TYPE_HTTP",
      url: "https://api.githubcopilot.com/mcp/",
    },
    auth: {
      type: "MCP_AUTH_TYPE_OAUTH_CLIENT_CREDENTIALS",
      staticHeaders: [
        {
          key: "Authorization",
          value: "ghp_xxxxxxxxxxxx",
        },
      ],
    },
    defaultToolExposure: {
      mode: "MCP_TOOL_EXPOSURE_MODE_ALL",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier of the MCP server.                                                   |
| `updateMcpServerRequest`                                                               | [components.UpdateMcpServerRequest](../../models/components/updatemcpserverrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |