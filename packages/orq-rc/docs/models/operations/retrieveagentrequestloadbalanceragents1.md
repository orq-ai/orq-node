# RetrieveAgentRequestLoadBalancerAgents1

## Example Usage

```typescript
import { RetrieveAgentRequestLoadBalancerAgents1 } from "@orq-ai/node/models/operations";

let value: RetrieveAgentRequestLoadBalancerAgents1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.RetrieveAgentRequestLoadBalancerAgentsType](../../models/operations/retrieveagentrequestloadbalanceragentstype.md)       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `models`                                                                                                                             | [operations.RetrieveAgentRequestLoadBalancerAgentsModels](../../models/operations/retrieveagentrequestloadbalanceragentsmodels.md)[] | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |