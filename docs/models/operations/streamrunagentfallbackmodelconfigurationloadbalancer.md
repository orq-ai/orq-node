# StreamRunAgentFallbackModelConfigurationLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.StreamRunAgentLoadBalancerAgents1`

```typescript
const value: operations.StreamRunAgentLoadBalancerAgents1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

