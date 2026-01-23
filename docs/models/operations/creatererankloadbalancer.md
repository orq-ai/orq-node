# CreateRerankLoadBalancer

Array of models with weights for load balancing requests


## Supported Types

### `operations.CreateRerankLoadBalancer1`

```typescript
const value: operations.CreateRerankLoadBalancer1 = {
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

