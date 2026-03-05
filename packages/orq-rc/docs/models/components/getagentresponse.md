# GetAgentResponse

Response type from the get-response endpoint. Includes a status field indicating the current state of the agent execution.

## Example Usage

```typescript
import { GetAgentResponse } from "@orq-ai/node/models/components";

let value: GetAgentResponse = {
  id: "<id>",
  taskId: "<id>",
  output: [],
  createdAt: "1721223768798",
  model: "PT Cruiser",
  status: "failed",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The unique response ID                                                                                       |
| `taskId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The agent execution task ID                                                                                  |
| `output`                                                                                                     | [components.AgentResponseMessage](../../models/components/agentresponsemessage.md)[]                         | :heavy_check_mark:                                                                                           | Array of messages from the agent execution                                                                   |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | ISO timestamp of response creation                                                                           |
| `model`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Model used in provider/model format                                                                          |
| `usage`                                                                                                      | [components.GetAgentResponseUsage](../../models/components/getagentresponseusage.md)                         | :heavy_minus_sign:                                                                                           | Token usage from the agent execution                                                                         |
| `finishReason`                                                                                               | [components.GetAgentResponseFinishReason](../../models/components/getagentresponsefinishreason.md)           | :heavy_minus_sign:                                                                                           | The reason why the agent stopped generating                                                                  |
| `pendingToolCalls`                                                                                           | [components.GetAgentResponsePendingToolCalls](../../models/components/getagentresponsependingtoolcalls.md)[] | :heavy_minus_sign:                                                                                           | Tool calls awaiting user response (when finish_reason is function_call)                                      |
| `telemetry`                                                                                                  | [components.Telemetry](../../models/components/telemetry.md)                                                 | :heavy_minus_sign:                                                                                           | Telemetry information for correlating the response with traces                                               |
| `status`                                                                                                     | [components.Status](../../models/components/status.md)                                                       | :heavy_check_mark:                                                                                           | Current status of the agent response                                                                         |
| `error`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Error message when status is failed                                                                          |