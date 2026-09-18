# McpServerUpdateRequest

## Example Usage

```typescript
import { McpServerUpdateRequest } from "@orq-ai/node/models/operations";

let value: McpServerUpdateRequest = {
  id: "<id>",
  updateMcpServerRequest: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier of the MCP server.                                                   |
| `updateMcpServerRequest`                                                               | [components.UpdateMcpServerRequest](../../models/components/updatemcpserverrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |