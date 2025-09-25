# ToolResultPart

Tool execution result part. Use this ONLY when providing results for a pending tool call from the agent. The tool_call_id must match the ID from the agent's tool call request.

## Example Usage

```typescript
import { ToolResultPart } from "@orq-ai/node/models/operations";

let value: ToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `kind`                                                                                               | [operations.RunAgentPublicMessagePartKind](../../models/operations/runagentpublicmessagepartkind.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `toolCallId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |