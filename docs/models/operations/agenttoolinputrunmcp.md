# AgentToolInputRunMcp

## Example Usage

```typescript
import { AgentToolInputRunMcp } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunMcp = {
  serverUrl: "https://minor-leading.net/",
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

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `serverUrl`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The MCP server URL (cached for execution)                                                                                                          |
| `headers`                                                                                                                                          | Record<string, [operations.StreamRunAgentAgentToolInputRunAgentsHeaders](../../models/operations/streamrunagentagenttoolinputrunagentsheaders.md)> | :heavy_minus_sign:                                                                                                                                 | HTTP headers for MCP server requests with encryption support                                                                                       |
| `tools`                                                                                                                                            | [operations.AgentToolInputRunTools](../../models/operations/agenttoolinputruntools.md)[]                                                           | :heavy_check_mark:                                                                                                                                 | Array of tools available from the MCP server                                                                                                       |
| `connectionType`                                                                                                                                   | [operations.AgentToolInputRunConnectionType](../../models/operations/agenttoolinputrunconnectiontype.md)                                           | :heavy_check_mark:                                                                                                                                 | The connection type used by the MCP server                                                                                                         |