# UpdatePromptLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.UpdatePromptLoadBalancer1`

```typescript
const value: operations.UpdatePromptLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

