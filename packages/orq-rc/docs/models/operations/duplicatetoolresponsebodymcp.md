# DuplicateToolResponseBodyMcp

## Example Usage

```typescript
import { DuplicateToolResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: DuplicateToolResponseBodyMcp = {
  serverId: "<id>",
  toolName: "<value>",
  serverUrl: "https://international-bandwidth.info/",
  inputSchema: {
    type: "object",
  },
  connectionType: "sse",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `serverId`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the MCP server this tool belongs to                                                                              |
| `toolName`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The original tool name from the MCP server                                                                                 |
| `serverUrl`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The MCP server URL (cached for execution)                                                                                  |
| `headers`                                                                                                                  | Record<string, [operations.DuplicateToolResponseBodyHeaders](../../models/operations/duplicatetoolresponsebodyheaders.md)> | :heavy_minus_sign:                                                                                                         | HTTP headers for MCP server requests (encrypted format)                                                                    |
| `inputSchema`                                                                                                              | [operations.DuplicateToolResponseBodyInputSchema](../../models/operations/duplicatetoolresponsebodyinputschema.md)         | :heavy_check_mark:                                                                                                         | The original MCP tool input schema for LLM conversion                                                                      |
| `connectionType`                                                                                                           | [operations.DuplicateToolResponseBodyConnectionType](../../models/operations/duplicatetoolresponsebodyconnectiontype.md)   | :heavy_check_mark:                                                                                                         | The connection type used by the MCP server                                                                                 |