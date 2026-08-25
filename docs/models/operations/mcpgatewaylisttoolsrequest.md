# McpGatewayListToolsRequest

## Example Usage

```typescript
import { McpGatewayListToolsRequest } from "@orq-ai/node/models/operations";

let value: McpGatewayListToolsRequest = {
  gatewayId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `gatewayId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier of the MCP gateway.                                                          |
| `limit`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | Page size between 1 and 200. Defaults to 25.                                                   |
| `startingAfter`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | Cursor for the page after the given `exposed_name`. Mutually exclusive with `ending_before`.   |
| `endingBefore`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | Cursor for the page before the given `exposed_name`. Mutually exclusive with `starting_after`. |
| `mcpServerId`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | Returns only tools contributed by this upstream server.                                        |