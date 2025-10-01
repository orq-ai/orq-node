# DataMcp

## Example Usage

```typescript
import { DataMcp } from "@orq-ai/node/models/operations";

let value: DataMcp = {
  serverId: "<id>",
  toolName: "<value>",
  serverUrl: "https://dark-poetry.info/",
  inputSchema: {
    type: "object",
  },
  connectionType: "sse",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `serverId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the MCP server this tool belongs to                                    |
| `toolName`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The original tool name from the MCP server                                       |
| `serverUrl`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The MCP server URL (cached for execution)                                        |
| `headers`                                                                        | Record<string, [operations.DataHeaders](../../models/operations/dataheaders.md)> | :heavy_minus_sign:                                                               | HTTP headers for MCP server requests (encrypted format)                          |
| `inputSchema`                                                                    | [operations.DataInputSchema](../../models/operations/datainputschema.md)         | :heavy_check_mark:                                                               | The original MCP tool input schema for LLM conversion                            |
| `connectionType`                                                                 | [operations.DataConnectionType](../../models/operations/dataconnectiontype.md)   | :heavy_check_mark:                                                               | The connection type used by the MCP server                                       |