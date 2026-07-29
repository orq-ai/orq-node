# McpToolsetToolRef

McpToolsetToolRef points at a single tool by its origin server and the
 tool's bare (upstream) name.

## Example Usage

```typescript
import { McpToolsetToolRef } from "@orq-ai/node/models/components";

let value: McpToolsetToolRef = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `mcpServerId`      | *string*           | :heavy_minus_sign: | N/A                |
| `toolName`         | *string*           | :heavy_minus_sign: | N/A                |