# ResponseBodyMcp

## Example Usage

```typescript
import { ResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: ResponseBodyMcp = {
  serverId: "<id>",
  toolName: "<value>",
  serverUrl: "https://alert-thorn.biz/",
  inputSchema: {
    type: "object",
  },
  connectionType: "sse",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `serverId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the MCP server this tool belongs to                                                    |
| `toolName`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | The original tool name from the MCP server                                                       |
| `serverUrl`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The MCP server URL (cached for execution)                                                        |
| `headers`                                                                                        | Record<string, [operations.ResponseBodyHeaders](../../models/operations/responsebodyheaders.md)> | :heavy_minus_sign:                                                                               | HTTP headers for MCP server requests (encrypted format)                                          |
| `inputSchema`                                                                                    | [operations.ResponseBodyInputSchema](../../models/operations/responsebodyinputschema.md)         | :heavy_check_mark:                                                                               | The original MCP tool input schema for LLM conversion                                            |
| `connectionType`                                                                                 | [operations.ResponseBodyConnectionType](../../models/operations/responsebodyconnectiontype.md)   | :heavy_check_mark:                                                                               | The connection type used by the MCP server                                                       |