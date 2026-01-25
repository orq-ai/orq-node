# CreateEmbeddingLoadBalancerRouterEmbeddings1

## Example Usage

```typescript
import { CreateEmbeddingLoadBalancerRouterEmbeddings1 } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingLoadBalancerRouterEmbeddings1 = {
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

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                         | [operations.CreateEmbeddingLoadBalancerRouterEmbeddingsType](../../models/operations/createembeddingloadbalancerrouterembeddingstype.md)       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `models`                                                                                                                                       | [operations.CreateEmbeddingLoadBalancerRouterEmbeddingsModels](../../models/operations/createembeddingloadbalancerrouterembeddingsmodels.md)[] | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |