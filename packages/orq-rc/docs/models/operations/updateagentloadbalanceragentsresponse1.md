# UpdateAgentLoadBalancerAgentsResponse1

## Example Usage

```typescript
import { UpdateAgentLoadBalancerAgentsResponse1 } from "@orq-ai/node/models/operations";

let value: UpdateAgentLoadBalancerAgentsResponse1 = {
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.UpdateAgentLoadBalancerAgentsResponseType](../../models/operations/updateagentloadbalanceragentsresponsetype.md)       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `models`                                                                                                                           | [operations.UpdateAgentLoadBalancerAgentsResponseModels](../../models/operations/updateagentloadbalanceragentsresponsemodels.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |