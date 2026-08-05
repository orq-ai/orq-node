# RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody31

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody31,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody31 =
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

| Field                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody3Type](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponse200applicationjsonresponsebody3type.md)       | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |
| `models`                                                                                                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody3Models](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponse200applicationjsonresponsebody3models.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |