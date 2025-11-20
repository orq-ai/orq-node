# PartsToolResultPart

The result of a tool execution. Contains the tool call ID for correlation and the result data from the tool invocation.

## Example Usage

```typescript
import { PartsToolResultPart } from "@orq-ai/node/models/operations";

let value: PartsToolResultPart = {
  kind: "tool_result",
  toolCallId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                 | [operations.GetAgentTaskPartsAgentsResponse200Kind](../../models/operations/getagenttaskpartsagentsresponse200kind.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `toolCallId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `result`                                                                                                               | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `metadata`                                                                                                             | Record<string, *any*>                                                                                                  | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |