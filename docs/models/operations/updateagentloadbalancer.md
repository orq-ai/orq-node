# UpdateAgentLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.UpdateAgentLoadBalancerAgentsResponse1`

```typescript
const value: operations.UpdateAgentLoadBalancerAgentsResponse1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

