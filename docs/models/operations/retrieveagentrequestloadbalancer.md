# RetrieveAgentRequestLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.RetrieveAgentRequestLoadBalancer1`

```typescript
const value: operations.RetrieveAgentRequestLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

