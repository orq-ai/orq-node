# ListAgentDeploymentsRequest

## Example Usage

```typescript
import { ListAgentDeploymentsRequest } from "@orq-ai/node/models/operations";

let value: ListAgentDeploymentsRequest = {
  agentKey: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `agentKey`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `limit`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `startingAfter`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `status`                                                                             | [components.AgentDeploymentStatus](../../models/components/agentdeploymentstatus.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `search`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |