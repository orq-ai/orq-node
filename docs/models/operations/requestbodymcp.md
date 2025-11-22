# RequestBodyMcp

## Example Usage

```typescript
import { RequestBodyMcp } from "@orq-ai/node/models/operations";

let value: RequestBodyMcp = {
  serverUrl: "https://webbed-willow.biz/",
  connectionType: "sse",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `serverUrl`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The MCP server URL (cached for execution)                                                      |
| `headers`                                                                                      | Record<string, [operations.RequestBodyHeaders](../../models/operations/requestbodyheaders.md)> | :heavy_minus_sign:                                                                             | HTTP headers for MCP server requests with encryption support                                   |
| `connectionType`                                                                               | [operations.RequestBodyConnectionType](../../models/operations/requestbodyconnectiontype.md)   | :heavy_check_mark:                                                                             | The connection type used by the MCP server                                                     |