# GetAgentResponseRequest

## Example Usage

```typescript
import { GetAgentResponseRequest } from "@orq-ai/node/models/operations";

let value: GetAgentResponseRequest = {
  agentKey: "<value>",
  taskId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `agentKey`                                                | *string*                                                  | :heavy_check_mark:                                        | The unique key identifier of the agent                    |
| `taskId`                                                  | *string*                                                  | :heavy_check_mark:                                        | The agent execution task ID returned from create response |