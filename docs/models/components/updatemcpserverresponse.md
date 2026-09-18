# UpdateMcpServerResponse

## Example Usage

```typescript
import { UpdateMcpServerResponse } from "@orq-ai/node/models/components";

let value: UpdateMcpServerResponse = {
  mcpServer: {
    connection: {
      type: "MCP_CONNECTION_TYPE_HTTP",
      url: "https://api.githubcopilot.com/mcp/",
    },
    auth: {
      type: "MCP_AUTH_TYPE_STATIC_HEADERS",
      staticHeaders: [
        {
          key: "Authorization",
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `mcpServer`                                                  | [components.McpServer](../../models/components/mcpserver.md) | :heavy_minus_sign:                                           | N/A                                                          |