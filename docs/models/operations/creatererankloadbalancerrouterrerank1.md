# CreateRerankLoadBalancerRouterRerank1

## Example Usage

```typescript
import { CreateRerankLoadBalancerRouterRerank1 } from "@orq-ai/node/models/operations";

let value: CreateRerankLoadBalancerRouterRerank1 = {
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.CreateRerankLoadBalancerRouterRerankType](../../models/operations/creatererankloadbalancerrouterreranktype.md)       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `models`                                                                                                                         | [operations.CreateRerankLoadBalancerRouterRerankModels](../../models/operations/creatererankloadbalancerrouterrerankmodels.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |