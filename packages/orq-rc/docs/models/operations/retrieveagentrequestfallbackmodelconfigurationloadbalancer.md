# RetrieveAgentRequestFallbackModelConfigurationLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.RetrieveAgentRequestLoadBalancerAgents1`

```typescript
const value: operations.RetrieveAgentRequestLoadBalancerAgents1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

