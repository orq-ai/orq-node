# McpGatewayServerLink

## Example Usage

```typescript
import { McpGatewayServerLink } from "@orq-ai/node/models/components";

let value: McpGatewayServerLink = {
  mcpServerId: "<id>",
  alias: "<value>",
  toolExposure: {
    mode: "MCP_TOOL_EXPOSURE_MODE_ALL",
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `mcpServerId`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Upstream MCP server this gateway aggregates.                                                                        |
| `alias`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Prefix used instead of the server key when namespacing this server's tool names. Must be unique within the gateway. |
| `enabled`                                                                                                           | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | Whether this link contributes tools to the gateway.                                                                 |
| `toolExposure`                                                                                                      | [components.McpToolExposure](../../models/components/mcptoolexposure.md)                                            | :heavy_check_mark:                                                                                                  | Narrows which of the server's tools this gateway exposes.                                                           |