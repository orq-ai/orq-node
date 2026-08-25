# McpTool

## Example Usage

```typescript
import { McpTool } from "@orq-ai/node/models/components";

let value: McpTool = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Bare tool name as advertised by the upstream server.                           |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Tool description advertised upstream, passed through to MCP clients.           |
| `inputSchema`                                                                  | [components.McpToolInputSchema](../../models/components/mcptoolinputschema.md) | :heavy_minus_sign:                                                             | JSON Schema for the tool arguments, as advertised upstream.                    |
| `status`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | `ACTIVE`, or `MISSING` when the last sync no longer found the tool upstream.   |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | Assigned once on first discovery and preserved across sync.                    |
| `title`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | Human-readable label advertised upstream, when the server sends one.           |
| `annotations`                                                                  | [components.McpToolAnnotations](../../models/components/mcptoolannotations.md) | :heavy_minus_sign:                                                             | Behaviour hints claimed by the upstream server.                                |