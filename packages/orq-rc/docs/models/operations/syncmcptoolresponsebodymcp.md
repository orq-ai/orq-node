# SyncMcpToolResponseBodyMcp

## Example Usage

```typescript
import { SyncMcpToolResponseBodyMcp } from "@orq-ai/node/models/operations";

let value: SyncMcpToolResponseBodyMcp = {
  serverUrl: "https://genuine-digit.info/",
  tools: [],
  connectionType: "sse",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `serverUrl`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The MCP server URL (cached for execution)                                                                              |
| `headers`                                                                                                              | Record<string, [operations.SyncMcpToolResponseBodyHeaders](../../models/operations/syncmcptoolresponsebodyheaders.md)> | :heavy_minus_sign:                                                                                                     | HTTP headers for MCP server requests with encryption support                                                           |
| `tools`                                                                                                                | [operations.SyncMcpToolResponseBodyTools](../../models/operations/syncmcptoolresponsebodytools.md)[]                   | :heavy_check_mark:                                                                                                     | Array of tools available from the MCP server                                                                           |
| `connectionType`                                                                                                       | [operations.SyncMcpToolResponseBodyConnectionType](../../models/operations/syncmcptoolresponsebodyconnectiontype.md)   | :heavy_check_mark:                                                                                                     | The connection type used by the MCP server                                                                             |