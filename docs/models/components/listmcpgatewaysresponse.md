# ListMcpGatewaysResponse

## Example Usage

```typescript
import { ListMcpGatewaysResponse } from "@orq-ai/node/models/components";

let value: ListMcpGatewaysResponse = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `object`                                                         | *string*                                                         | :heavy_minus_sign:                                               | Always "list".                                                   |
| `data`                                                           | [components.McpGateway](../../models/components/mcpgateway.md)[] | :heavy_minus_sign:                                               | MCP gateways on the current page.                                |
| `hasMore`                                                        | *boolean*                                                        | :heavy_minus_sign:                                               | Whether further items exist beyond this page.                    |