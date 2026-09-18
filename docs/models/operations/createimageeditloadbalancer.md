# CreateImageEditLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.CreateImageEditLoadBalancer1`

```typescript
const value: operations.CreateImageEditLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

