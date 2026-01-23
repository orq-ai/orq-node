# UpdateAgentFallbackModelConfigurationLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.UpdateAgentLoadBalancerAgents1`

```typescript
const value: operations.UpdateAgentLoadBalancerAgents1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

