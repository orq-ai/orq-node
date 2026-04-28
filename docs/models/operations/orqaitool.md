# OrqAiTool

An orq.ai platform tool reference. For MCP tools, prefer type 'mcp' with 'key' instead of 'orq:mcp' with 'tool_id'.

## Example Usage

```typescript
import { OrqAiTool } from "@orq-ai/node/models/operations";

let value: OrqAiTool = {
  type: "orq:function",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `toolId`                                                                                                               | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The tool ID (for orq:mcp, orq:http, orq:function).                                                                     |
| `type`                                                                                                                 | [operations.CreateRouterResponseToolsResponsesType](../../models/operations/createrouterresponsetoolsresponsestype.md) | :heavy_check_mark:                                                                                                     | The orq.ai tool type.                                                                                                  |