# CreateAgentRequestLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.CreateAgentRequestLoadBalancerAgents1`

```typescript
const value: operations.CreateAgentRequestLoadBalancerAgents1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

