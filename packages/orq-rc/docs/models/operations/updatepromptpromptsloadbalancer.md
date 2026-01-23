# UpdatePromptPromptsLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.UpdatePromptLoadBalancerPrompts1`

```typescript
const value: operations.UpdatePromptLoadBalancerPrompts1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

