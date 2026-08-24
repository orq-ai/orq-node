# ListMcpGatewayToolsResponse

## Example Usage

```typescript
import { ListMcpGatewayToolsResponse } from "@orq-ai/node/models/components";

let value: ListMcpGatewayToolsResponse = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Always "list".                                                           |
| `data`                                                                   | [components.McpGatewayTool](../../models/components/mcpgatewaytool.md)[] | :heavy_minus_sign:                                                       | Exposed tools on the current page.                                       |
| `hasMore`                                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether further items exist beyond this page.                            |