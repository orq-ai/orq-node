# GetPromptVersionLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.GetPromptVersionLoadBalancer1`

```typescript
const value: operations.GetPromptVersionLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

