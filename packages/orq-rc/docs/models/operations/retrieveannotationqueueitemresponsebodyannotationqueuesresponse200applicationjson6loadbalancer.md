# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesResponse200ApplicationJson6LoadBalancer

Array of models with weights for load balancing requests


## Supported Types

### `operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody61`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody61 =
    {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
        {
          model: "anthropic/claude-3-5-sonnet",
          weight: 0.3,
        },
      ],
    };
```

