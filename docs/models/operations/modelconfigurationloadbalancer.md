# ModelConfigurationLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.UpdateAgentLoadBalancer1`

```typescript
const value: operations.UpdateAgentLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

