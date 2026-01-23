# RunAgentModelConfigurationLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.RunAgentLoadBalancer1`

```typescript
const value: operations.RunAgentLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

