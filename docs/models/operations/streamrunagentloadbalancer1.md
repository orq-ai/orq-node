# StreamRunAgentLoadBalancer1

## Example Usage

```typescript
import { StreamRunAgentLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: StreamRunAgentLoadBalancer1 = {
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
| `type`                                                                                                       | [operations.StreamRunAgentLoadBalancerType](../../models/operations/streamrunagentloadbalancertype.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `models`                                                                                                     | [operations.StreamRunAgentLoadBalancerModels](../../models/operations/streamrunagentloadbalancermodels.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |