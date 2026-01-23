# CreateEmbeddingLoadBalancer1

## Example Usage

```typescript
import { CreateEmbeddingLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingLoadBalancer1 = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.CreateEmbeddingLoadBalancerType](../../models/operations/createembeddingloadbalancertype.md)       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `models`                                                                                                       | [operations.CreateEmbeddingLoadBalancerModels](../../models/operations/createembeddingloadbalancermodels.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |