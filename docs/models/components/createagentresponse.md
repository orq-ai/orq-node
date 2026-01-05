# CreateAgentResponse

Response type from the create-response endpoint.

## Example Usage

```typescript
import { CreateAgentResponse } from "@orq-ai/node/models/components";

let value: CreateAgentResponse = {
  id: "<id>",
  taskId: "<id>",
  output: [],
  createdAt: "1723656581139",
  model: "XC90",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The unique response ID                                                               |
| `taskId`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | The agent execution task ID                                                          |
| `output`                                                                             | [components.AgentResponseMessage](../../models/components/agentresponsemessage.md)[] | :heavy_check_mark:                                                                   | Array of messages from the agent execution                                           |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | ISO timestamp of response creation                                                   |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Model used in provider/model format                                                  |
| `usage`                                                                              | [components.Usage](../../models/components/usage.md)                                 | :heavy_minus_sign:                                                                   | Token usage from the agent execution                                                 |