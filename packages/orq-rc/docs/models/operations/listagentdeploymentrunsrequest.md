# ListAgentDeploymentRunsRequest

## Example Usage

```typescript
import { ListAgentDeploymentRunsRequest } from "@orq-ai/node/models/operations";

let value: ListAgentDeploymentRunsRequest = {
  agentKey: "<value>",
  deploymentId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `agentKey`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deploymentId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `startingAfter`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [components.AgentDeploymentRunStatus](../../models/components/agentdeploymentrunstatus.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |