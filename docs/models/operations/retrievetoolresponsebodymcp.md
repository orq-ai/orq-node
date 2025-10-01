# RetrieveToolResponseBodyMcp

## Example Usage

```typescript
import { RetrieveToolResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: RetrieveToolResponseBodyMcp = {
  serverId: "<id>",
  toolName: "<value>",
  serverUrl: "https://difficult-shadowbox.net/",
  inputSchema: {
    type: "object",
  },
  connectionType: "sse",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `serverId`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The ID of the MCP server this tool belongs to                                                                            |
| `toolName`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The original tool name from the MCP server                                                                               |
| `serverUrl`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The MCP server URL (cached for execution)                                                                                |
| `headers`                                                                                                                | Record<string, [operations.RetrieveToolResponseBodyHeaders](../../models/operations/retrievetoolresponsebodyheaders.md)> | :heavy_minus_sign:                                                                                                       | HTTP headers for MCP server requests (encrypted format)                                                                  |
| `inputSchema`                                                                                                            | [operations.RetrieveToolResponseBodyInputSchema](../../models/operations/retrievetoolresponsebodyinputschema.md)         | :heavy_check_mark:                                                                                                       | The original MCP tool input schema for LLM conversion                                                                    |
| `connectionType`                                                                                                         | [operations.RetrieveToolResponseBodyConnectionType](../../models/operations/retrievetoolresponsebodyconnectiontype.md)   | :heavy_check_mark:                                                                                                       | The connection type used by the MCP server                                                                               |