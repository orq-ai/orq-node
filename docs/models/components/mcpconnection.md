# McpConnection

## Example Usage

```typescript
import { McpConnection } from "@orq-ai/node/models/components";

let value: McpConnection = {
  type: "MCP_CONNECTION_TYPE_UNSPECIFIED",
  url: "https://perky-cruelty.com",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [components.McpConnectionType](../../models/components/mcpconnectiontype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | Upstream endpoint; must use the http or https scheme.                        |