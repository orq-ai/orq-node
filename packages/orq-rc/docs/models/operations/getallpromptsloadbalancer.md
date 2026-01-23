# GetAllPromptsLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.GetAllPromptsLoadBalancer1`

```typescript
const value: operations.GetAllPromptsLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

