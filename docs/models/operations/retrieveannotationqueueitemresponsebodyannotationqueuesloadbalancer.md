# RetrieveAnnotationQueueItemResponseBodyAnnotationQueuesLoadBalancer

Load balancer configuration for the request.


## Supported Types

### `operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse1`

```typescript
const value:
  operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse1 =
    {
      type: "weight_based",
      models: [
        {
          model: "openai/gpt-4o",
          weight: 0.7,
        },
      ],
    };
```

