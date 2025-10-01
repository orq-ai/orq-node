# UpdateToolResponseBodyMcp

## Example Usage

```typescript
import { UpdateToolResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: UpdateToolResponseBodyMcp = {
  serverId: "<id>",
  toolName: "<value>",
  serverUrl: "https://dim-gray.org",
  inputSchema: {
    type: "object",
  },
  connectionType: "sse",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `serverId`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the MCP server this tool belongs to                                                                        |
| `toolName`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The original tool name from the MCP server                                                                           |
| `serverUrl`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The MCP server URL (cached for execution)                                                                            |
| `headers`                                                                                                            | Record<string, [operations.UpdateToolResponseBodyHeaders](../../models/operations/updatetoolresponsebodyheaders.md)> | :heavy_minus_sign:                                                                                                   | HTTP headers for MCP server requests (encrypted format)                                                              |
| `inputSchema`                                                                                                        | [operations.UpdateToolResponseBodyInputSchema](../../models/operations/updatetoolresponsebodyinputschema.md)         | :heavy_check_mark:                                                                                                   | The original MCP tool input schema for LLM conversion                                                                |
| `connectionType`                                                                                                     | [operations.UpdateToolResponseBodyConnectionType](../../models/operations/updatetoolresponsebodyconnectiontype.md)   | :heavy_check_mark:                                                                                                   | The connection type used by the MCP server                                                                           |