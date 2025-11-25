# ToolResultPart

The result of a tool execution. Contains the tool call ID for correlation and the result data from the tool invocation.

## Example Usage

```typescript
import { ToolResultPart } from "@orq-ai/node/models/components";

let value: ToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `kind`                                                                         | [components.ToolResultPartKind](../../models/components/toolresultpartkind.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `toolCallId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |