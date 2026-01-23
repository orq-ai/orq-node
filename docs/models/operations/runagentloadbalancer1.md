# RunAgentLoadBalancer1

## Example Usage

```typescript
import { RunAgentLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: RunAgentLoadBalancer1 = {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [operations.RunAgentLoadBalancerType](../../models/operations/runagentloadbalancertype.md)       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `models`                                                                                         | [operations.RunAgentLoadBalancerModels](../../models/operations/runagentloadbalancermodels.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |