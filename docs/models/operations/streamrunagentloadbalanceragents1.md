# StreamRunAgentLoadBalancerAgents1

## Example Usage

```typescript
import { StreamRunAgentLoadBalancerAgents1 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentLoadBalancerAgents1 = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [operations.StreamRunAgentLoadBalancerAgentsType](../../models/operations/streamrunagentloadbalanceragentstype.md)       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `models`                                                                                                                 | [operations.StreamRunAgentLoadBalancerAgentsModels](../../models/operations/streamrunagentloadbalanceragentsmodels.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |