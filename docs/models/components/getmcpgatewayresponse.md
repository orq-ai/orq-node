# GetMcpGatewayResponse

## Example Usage

```typescript
import { GetMcpGatewayResponse } from "@orq-ai/node/models/components";

let value: GetMcpGatewayResponse = {
  mcpGateway: {
    displayName: "Production Gateway",
    serverLinks: [
      {
        mcpServerId: "<id>",
        alias: "<value>",
        toolExposure: {
          mode: "MCP_TOOL_EXPOSURE_MODE_ALL",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `mcpGateway`                                                   | [components.McpGateway](../../models/components/mcpgateway.md) | :heavy_minus_sign:                                             | N/A                                                            |