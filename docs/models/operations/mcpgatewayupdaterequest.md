# McpGatewayUpdateRequest

## Example Usage

```typescript
import { McpGatewayUpdateRequest } from "@orq-ai/node/models/operations";

let value: McpGatewayUpdateRequest = {
  id: "<id>",
  updateMcpGatewayRequest: {
    serverLinks: [
      {
        mcpServerId: "<id>",
        alias: "<value>",
        toolExposure: {
          mode: "MCP_TOOL_EXPOSURE_MODE_ALL",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier of the MCP gateway.                                                    |
| `updateMcpGatewayRequest`                                                                | [components.UpdateMcpGatewayRequest](../../models/components/updatemcpgatewayrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |