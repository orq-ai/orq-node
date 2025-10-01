# Mcp

## Example Usage

```typescript
import { Mcp } from "@orq-ai/node/models/operations";

let value: Mcp = {
  serverId: "<id>",
  toolName: "<value>",
  serverUrl: "https://warmhearted-transom.biz/",
  inputSchema: {
    type: "object",
  },
  connectionType: "sse",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `serverId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The ID of the MCP server this tool belongs to                            |
| `toolName`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The original tool name from the MCP server                               |
| `serverUrl`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | The MCP server URL (cached for execution)                                |
| `headers`                                                                | Record<string, [operations.Headers](../../models/operations/headers.md)> | :heavy_minus_sign:                                                       | HTTP headers for MCP server requests (encrypted format)                  |
| `inputSchema`                                                            | [operations.InputSchema](../../models/operations/inputschema.md)         | :heavy_check_mark:                                                       | The original MCP tool input schema for LLM conversion                    |
| `connectionType`                                                         | [operations.ConnectionType](../../models/operations/connectiontype.md)   | :heavy_check_mark:                                                       | The connection type used by the MCP server                               |