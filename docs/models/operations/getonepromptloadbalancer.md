# GetOnePromptLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.GetOnePromptLoadBalancer1`

```typescript
const value: operations.GetOnePromptLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

