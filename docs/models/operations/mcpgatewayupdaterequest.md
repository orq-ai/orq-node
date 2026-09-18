# McpGatewayUpdateRequest

## Example Usage

```typescript
import { McpGatewayUpdateRequest } from "@orq-ai/node/models/operations";

let value: McpGatewayUpdateRequest = {
  id: "<id>",
  updateMcpGatewayRequest: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier of the MCP gateway.                                                    |
| `updateMcpGatewayRequest`                                                                | [components.UpdateMcpGatewayRequest](../../models/components/updatemcpgatewayrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |