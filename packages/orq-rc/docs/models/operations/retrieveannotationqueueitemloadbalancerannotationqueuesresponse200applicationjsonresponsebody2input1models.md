# RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody2Input1Models

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody2Input1Models,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONResponseBody2Input1Models =
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    };
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `model`                                          | *string*                                         | :heavy_check_mark:                               | Model identifier for load balancing              | openai/gpt-4o                                    |
| `weight`                                         | *number*                                         | :heavy_minus_sign:                               | Weight assigned to this model for load balancing | 0.7                                              |