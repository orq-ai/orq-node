# ListMcpServersResponse

## Example Usage

```typescript
import { ListMcpServersResponse } from "@orq-ai/node/models/components";

let value: ListMcpServersResponse = {
  data: [
    {
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
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `object`                                                       | *string*                                                       | :heavy_minus_sign:                                             | Always "list".                                                 |
| `data`                                                         | [components.McpServer](../../models/components/mcpserver.md)[] | :heavy_minus_sign:                                             | MCP servers on the current page.                               |
| `hasMore`                                                      | *boolean*                                                      | :heavy_minus_sign:                                             | Whether further items exist beyond this page.                  |