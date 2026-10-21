# McpToolInput

Executes tools from Model Context Protocol (MCP) servers and gateways. Reference the server or gateway using "key" or "id"; add "tool_id" to attach a single tool, or omit it to attach every tool it exposes.

## Example Usage

```typescript
import { McpToolInput } from "@orq-ai/node/models/components";

let value: McpToolInput = {
  type: "mcp",
  id: "01KA84ND5J0SWQMA2Q8HY5WZZZ",
  toolId: "01KXYZ123456789",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                    | *"mcp"*                                                                                                   | :heavy_check_mark:                                                                                        | MCP tool type                                                                                             |
| `key`                                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The key of the MCP server or MCP gateway                                                                  |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The ID of the MCP server or MCP gateway                                                                   |
| `toolId`                                                                                                  | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The ID of a specific tool within the MCP server. Omit to attach every tool the server or gateway exposes. |
| `requiresApproval`                                                                                        | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Whether this tool requires approval before execution                                                      |