# DataMcp

## Example Usage

```typescript
import { DataMcp } from "@orq-ai/node/models/operations";

let value: DataMcp = {
  serverUrl: "https://dark-poetry.info/",
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `serverUrl`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | The MCP server URL (cached for execution)                                                              |
| `headers`                                                                                              | Record<string, [operations.GetAllToolsDataHeaders](../../models/operations/getalltoolsdataheaders.md)> | :heavy_minus_sign:                                                                                     | HTTP headers for MCP server requests with encryption support                                           |
| `tools`                                                                                                | [operations.GetAllToolsDataTools](../../models/operations/getalltoolsdatatools.md)[]                   | :heavy_check_mark:                                                                                     | Array of tools available from the MCP server                                                           |
| `connectionType`                                                                                       | [operations.DataConnectionType](../../models/operations/dataconnectiontype.md)                         | :heavy_check_mark:                                                                                     | The connection type used by the MCP server                                                             |