# CreateTranscriptionLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.CreateTranscriptionLoadBalancer1`

```typescript
const value: operations.CreateTranscriptionLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

