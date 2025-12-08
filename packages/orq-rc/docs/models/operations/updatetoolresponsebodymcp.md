# UpdateToolResponseBodyMcp

## Example Usage

```typescript
import { UpdateToolResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: UpdateToolResponseBodyMcp = {
  serverUrl: "https://dim-gray.org",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `serverUrl`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The MCP server URL (cached for execution)                                                                            |
| `headers`                                                                                                            | Record<string, [operations.UpdateToolResponseBodyHeaders](../../models/operations/updatetoolresponsebodyheaders.md)> | :heavy_minus_sign:                                                                                                   | HTTP headers for MCP server requests with encryption support                                                         |
| `tools`                                                                                                              | [operations.UpdateToolResponseBodyTools](../../models/operations/updatetoolresponsebodytools.md)[]                   | :heavy_check_mark:                                                                                                   | Array of tools available from the MCP server                                                                         |
| `connectionType`                                                                                                     | [operations.UpdateToolResponseBodyConnectionType](../../models/operations/updatetoolresponsebodyconnectiontype.md)   | :heavy_check_mark:                                                                                                   | The connection type used by the MCP server                                                                           |