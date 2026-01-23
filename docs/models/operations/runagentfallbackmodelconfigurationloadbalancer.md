# RunAgentFallbackModelConfigurationLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.RunAgentLoadBalancerAgents1`

```typescript
const value: operations.RunAgentLoadBalancerAgents1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

