# McpServerSyncRequest

## Example Usage

```typescript
import { McpServerSyncRequest } from "@orq-ai/node/models/operations";

let value: McpServerSyncRequest = {
  id: "<id>",
  syncMcpServerRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Unique identifier of the MCP server.                                               |
| `syncMcpServerRequest`                                                             | [components.SyncMcpServerRequest](../../models/components/syncmcpserverrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |