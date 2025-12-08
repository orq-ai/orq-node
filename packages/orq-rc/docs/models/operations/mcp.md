# Mcp

## Example Usage

```typescript
import { Mcp } from "@orq-ai/node/models/operations";

let value: Mcp = {
  serverUrl: "https://warmhearted-transom.biz/",
  tools: [
    {
      name: "<value>",
      schema: {
        type: "object",
      },
    },
  ],
  connectionType: "http",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `serverUrl`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The MCP server URL (cached for execution)                                                                  |
| `headers`                                                                                                  | Record<string, [operations.AgentToolInputRunHeaders](../../models/operations/agenttoolinputrunheaders.md)> | :heavy_minus_sign:                                                                                         | HTTP headers for MCP server requests with encryption support                                               |
| `tools`                                                                                                    | [operations.Tools](../../models/operations/tools.md)[]                                                     | :heavy_check_mark:                                                                                         | Array of tools available from the MCP server                                                               |
| `connectionType`                                                                                           | [operations.ConnectionType](../../models/operations/connectiontype.md)                                     | :heavy_check_mark:                                                                                         | The connection type used by the MCP server                                                                 |