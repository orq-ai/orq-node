# ListMcpServersResponse

## Example Usage

```typescript
import { ListMcpServersResponse } from "@orq-ai/node/models/components";

let value: ListMcpServersResponse = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `object`                                                       | *string*                                                       | :heavy_minus_sign:                                             | Always "list".                                                 |
| `data`                                                         | [components.McpServer](../../models/components/mcpserver.md)[] | :heavy_minus_sign:                                             | MCP servers on the current page.                               |
| `hasMore`                                                      | *boolean*                                                      | :heavy_minus_sign:                                             | Whether further items exist beyond this page.                  |