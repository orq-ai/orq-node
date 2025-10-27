# CreateAgentTools

## Example Usage

```typescript
import { CreateAgentTools } from "@orq-ai/node/models/operations";

let value: CreateAgentTools = {
  id: "<id>",
  actionType: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | The id of the resource                                                  |
| `key`                                                                   | *string*                                                                | :heavy_minus_sign:                                                      | Optional tool key for custom tools                                      |
| `actionType`                                                            | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `displayName`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `requiresApproval`                                                      | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `conditions`                                                            | [operations.Conditions](../../models/operations/conditions.md)[]        | :heavy_minus_sign:                                                      | N/A                                                                     |
| `mcpServer`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Optional MCP server reference for tools from MCP servers                |
| `timeout`                                                               | *number*                                                                | :heavy_minus_sign:                                                      | Tool execution timeout in seconds (default: 2 minutes, max: 10 minutes) |