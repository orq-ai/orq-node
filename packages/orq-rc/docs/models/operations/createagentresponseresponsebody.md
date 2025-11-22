# CreateAgentResponseResponseBody

Agent response created successfully

## Example Usage

```typescript
import { CreateAgentResponseResponseBody } from "@orq-ai/node/models/operations";

let value: CreateAgentResponseResponseBody = {
  id: "<id>",
  taskId: "<id>",
  output: [],
  createdAt: "1718411556486",
  model: "2",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The unique response ID                                                                     |
| `taskId`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | The agent execution task ID                                                                |
| `output`                                                                                   | [operations.Output](../../models/operations/output.md)[]                                   | :heavy_check_mark:                                                                         | Array of messages from the agent execution                                                 |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | ISO timestamp of response creation                                                         |
| `model`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | Model used in provider/model format                                                        |
| `usage`                                                                                    | [operations.CreateAgentResponseUsage](../../models/operations/createagentresponseusage.md) | :heavy_minus_sign:                                                                         | Token usage from the agent execution                                                       |