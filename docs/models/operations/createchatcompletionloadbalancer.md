# CreateChatCompletionLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.CreateChatCompletionLoadBalancer1`

```typescript
const value: operations.CreateChatCompletionLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

