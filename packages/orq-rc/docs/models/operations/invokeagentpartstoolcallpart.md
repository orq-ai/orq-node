# InvokeAgentPartsToolCallPart

A tool invocation request from an agent. Contains the tool name, unique call ID, and arguments for the tool execution.

## Example Usage

```typescript
import { InvokeAgentPartsToolCallPart } from "@orq-ai/node/models/operations";

let value: InvokeAgentPartsToolCallPart = {
  kind: "tool_call",
  toolName: "<value>",
  toolCallId: "<id>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                         | [operations.InvokeAgentPartsAgentsResponseKind](../../models/operations/invokeagentpartsagentsresponsekind.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `toolName`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `toolCallId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `arguments`                                                                                                    | Record<string, *any*>                                                                                          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `metadata`                                                                                                     | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |