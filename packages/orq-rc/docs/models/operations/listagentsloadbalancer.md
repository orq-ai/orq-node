# ListAgentsLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.ListAgentsLoadBalancer1`

```typescript
const value: operations.ListAgentsLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

