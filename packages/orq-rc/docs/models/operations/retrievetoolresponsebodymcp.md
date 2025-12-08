# RetrieveToolResponseBodyMcp

## Example Usage

```typescript
import { RetrieveToolResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: RetrieveToolResponseBodyMcp = {
  serverUrl: "https://difficult-shadowbox.net/",
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `serverUrl`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The MCP server URL (cached for execution)                                                                                |
| `headers`                                                                                                                | Record<string, [operations.RetrieveToolResponseBodyHeaders](../../models/operations/retrievetoolresponsebodyheaders.md)> | :heavy_minus_sign:                                                                                                       | HTTP headers for MCP server requests with encryption support                                                             |
| `tools`                                                                                                                  | [operations.RetrieveToolResponseBodyTools](../../models/operations/retrievetoolresponsebodytools.md)[]                   | :heavy_check_mark:                                                                                                       | Array of tools available from the MCP server                                                                             |
| `connectionType`                                                                                                         | [operations.RetrieveToolResponseBodyConnectionType](../../models/operations/retrievetoolresponsebodyconnectiontype.md)   | :heavy_check_mark:                                                                                                       | The connection type used by the MCP server                                                                               |