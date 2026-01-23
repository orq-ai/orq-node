# UpdateAgentLoadBalancer1

## Example Usage

```typescript
import { UpdateAgentLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: UpdateAgentLoadBalancer1 = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.UpdateAgentLoadBalancerType](../../models/operations/updateagentloadbalancertype.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `models`                                                                                               | [operations.UpdateAgentLoadBalancerModels](../../models/operations/updateagentloadbalancermodels.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |