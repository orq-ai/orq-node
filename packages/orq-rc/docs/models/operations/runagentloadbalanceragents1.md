# RunAgentLoadBalancerAgents1

## Example Usage

```typescript
import { RunAgentLoadBalancerAgents1 } from "@orq-ai/node/models/operations";

let value: RunAgentLoadBalancerAgents1 = {
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.RunAgentLoadBalancerAgentsType](../../models/operations/runagentloadbalanceragentstype.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `models`                                                                                                     | [operations.RunAgentLoadBalancerAgentsModels](../../models/operations/runagentloadbalanceragentsmodels.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |