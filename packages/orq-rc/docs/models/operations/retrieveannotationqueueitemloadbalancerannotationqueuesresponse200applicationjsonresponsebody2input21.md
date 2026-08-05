# RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody2Input21

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody2Input21,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody2Input21 =
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

## Fields

| Field                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                                           | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody2Input2Type](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponse200applicationjsonresponsebody2input2type.md)       | :heavy_check_mark:                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                              |
| `models`                                                                                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody2Input2Models](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponse200applicationjsonresponsebody2input2models.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                              |