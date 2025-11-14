# DuplicateToolResponseBodyMcp

## Example Usage

```typescript
import { DuplicateToolResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: DuplicateToolResponseBodyMcp = {
  serverUrl: "https://international-bandwidth.info/",
  tools: [
    {
      name: "<value>",
      schema: {
        type: "object",
      },
    },
  ],
  connectionType: "sse",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `serverUrl`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The MCP server URL (cached for execution)                                                                                  |
| `headers`                                                                                                                  | Record<string, [operations.DuplicateToolResponseBodyHeaders](../../models/operations/duplicatetoolresponsebodyheaders.md)> | :heavy_minus_sign:                                                                                                         | HTTP headers for MCP server requests with encryption support                                                               |
| `tools`                                                                                                                    | [operations.DuplicateToolResponseBodyTools](../../models/operations/duplicatetoolresponsebodytools.md)[]                   | :heavy_check_mark:                                                                                                         | Array of tools available from the MCP server                                                                               |
| `connectionType`                                                                                                           | [operations.DuplicateToolResponseBodyConnectionType](../../models/operations/duplicatetoolresponsebodyconnectiontype.md)   | :heavy_check_mark:                                                                                                         | The connection type used by the MCP server                                                                                 |