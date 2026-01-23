# CreateAgentRequestLoadBalancerAgents1

## Example Usage

```typescript
import { CreateAgentRequestLoadBalancerAgents1 } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestLoadBalancerAgents1 = {
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.CreateAgentRequestLoadBalancerAgentsType](../../models/operations/createagentrequestloadbalanceragentstype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `models`                                                                                                                   | [operations.CreateAgentRequestLoadBalancerModels](../../models/operations/createagentrequestloadbalancermodels.md)[]       | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |