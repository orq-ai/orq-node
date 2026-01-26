# CreateEmbeddingRouterEmbeddingsLoadBalancer

Array of models with weights for load balancing requests


## Supported Types

### `operations.CreateEmbeddingLoadBalancerRouterEmbeddings1`

```typescript
const value: operations.CreateEmbeddingLoadBalancerRouterEmbeddings1 = {
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

