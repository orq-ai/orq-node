# UpdateAgentLoadBalancerAgents1

## Example Usage

```typescript
import { UpdateAgentLoadBalancerAgents1 } from "@orq-ai/node/models/operations";

let value: UpdateAgentLoadBalancerAgents1 = {
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.UpdateAgentLoadBalancerAgentsType](../../models/operations/updateagentloadbalanceragentstype.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `models`                                                                                                           | [operations.UpdateAgentLoadBalancerAgentsModels](../../models/operations/updateagentloadbalanceragentsmodels.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |