# CreateSpeechLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.CreateSpeechLoadBalancer1`

```typescript
const value: operations.CreateSpeechLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-5.6-sol",
      weight: 0.7,
    },
  ],
};
```

