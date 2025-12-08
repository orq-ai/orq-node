# UpdateToolRequestBodyMcp

## Example Usage

```typescript
import { UpdateToolRequestBodyMcp } from "@orq-ai/node/models/operations";

let value: UpdateToolRequestBodyMcp = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `serverUrl`                                                                                                        | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The MCP server URL (cached for execution)                                                                          |
| `headers`                                                                                                          | Record<string, [operations.UpdateToolRequestBodyHeaders](../../models/operations/updatetoolrequestbodyheaders.md)> | :heavy_minus_sign:                                                                                                 | HTTP headers for MCP server requests with encryption support                                                       |
| `tools`                                                                                                            | [operations.RequestBodyTools](../../models/operations/requestbodytools.md)[]                                       | :heavy_minus_sign:                                                                                                 | Array of tools available from the MCP server                                                                       |
| `connectionType`                                                                                                   | [operations.UpdateToolRequestBodyConnectionType](../../models/operations/updatetoolrequestbodyconnectiontype.md)   | :heavy_minus_sign:                                                                                                 | The connection type used by the MCP server                                                                         |