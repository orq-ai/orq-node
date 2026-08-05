# RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody61

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody61,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody61 =
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
| `type`                                                                                                                                                                                                                                               | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody6Type](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponse200applicationjsonresponsebody6type.md)       | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |
| `models`                                                                                                                                                                                                                                             | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody6Models](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponse200applicationjsonresponsebody6models.md)[] | :heavy_check_mark:                                                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                                                  |