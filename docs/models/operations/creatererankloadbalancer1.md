# CreateRerankLoadBalancer1

## Example Usage

```typescript
import { CreateRerankLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateRerankLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
    {
      model: "anthropic/claude-3-5-sonnet",
      weight: 0.3,
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.CreateRerankLoadBalancerType](../../models/operations/creatererankloadbalancertype.md)       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `models`                                                                                                 | [operations.CreateRerankLoadBalancerModels](../../models/operations/creatererankloadbalancermodels.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |