# ToolsMCPTool

An MCP (Model Context Protocol) server tool. Provide server_url for inline mode, or key to reference a pre-configured MCP server.

## Example Usage

```typescript
import { ToolsMCPTool } from "@orq-ai/node/models/operations";

let value: ToolsMCPTool = {
  type: "mcp",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `allowedTools`                                                                                                              | [operations.AllowedTools](../../models/operations/allowedtools.md)                                                          | :heavy_minus_sign:                                                                                                          | Filter which tools from the MCP server are exposed.                                                                         |
| `headers`                                                                                                                   | Record<string, *string*>                                                                                                    | :heavy_minus_sign:                                                                                                          | Custom headers to send with MCP requests. Values support {{variable}} templates.                                            |
| `key`                                                                                                                       | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Unique identifier. Required for pre-configured MCP servers (lookup key). For inline servers, used as a trace/display label. |
| `serverDescription`                                                                                                         | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Human-readable description of the server.                                                                                   |
| `serverUrl`                                                                                                                 | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The MCP server endpoint URL (inline mode).                                                                                  |
| `type`                                                                                                                      | *"mcp"*                                                                                                                     | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |