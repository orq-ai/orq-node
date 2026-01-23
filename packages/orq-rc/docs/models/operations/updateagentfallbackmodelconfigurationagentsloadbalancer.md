# UpdateAgentFallbackModelConfigurationAgentsLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.UpdateAgentLoadBalancerAgentsResponse2001`

```typescript
const value: operations.UpdateAgentLoadBalancerAgentsResponse2001 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

