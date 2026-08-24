# McpServerTestToolRequest

## Example Usage

```typescript
import { McpServerTestToolRequest } from "@orq-ai/node/models/operations";

let value: McpServerTestToolRequest = {
  id: "<id>",
  testMcpServerToolRequest: {
    toolName: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier of the MCP server.                                                       |
| `testMcpServerToolRequest`                                                                 | [components.TestMcpServerToolRequest](../../models/components/testmcpservertoolrequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |