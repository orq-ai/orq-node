# ToolsAllowedTools

Filter which tools from the MCP server are exposed.

## Example Usage

```typescript
import { ToolsAllowedTools } from "@orq-ai/node/models/operations";

let value: ToolsAllowedTools = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `readOnly`                                      | *boolean*                                       | :heavy_minus_sign:                              | Only expose tools with readOnlyHint annotation. |
| `toolNames`                                     | *string*[]                                      | :heavy_minus_sign:                              | List of allowed tool names.                     |