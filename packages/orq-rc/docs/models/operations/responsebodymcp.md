# ResponseBodyMcp

## Example Usage

```typescript
import { ResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: ResponseBodyMcp = {
  serverUrl: "https://alert-thorn.biz/",
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `serverUrl`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The MCP server URL (cached for execution)                                                        |
| `headers`                                                                                        | Record<string, [operations.ResponseBodyHeaders](../../models/operations/responsebodyheaders.md)> | :heavy_minus_sign:                                                                               | HTTP headers for MCP server requests with encryption support                                     |
| `tools`                                                                                          | [operations.ResponseBodyTools](../../models/operations/responsebodytools.md)[]                   | :heavy_check_mark:                                                                               | Array of tools available from the MCP server                                                     |
| `connectionType`                                                                                 | [operations.ResponseBodyConnectionType](../../models/operations/responsebodyconnectiontype.md)   | :heavy_check_mark:                                                                               | The connection type used by the MCP server                                                       |