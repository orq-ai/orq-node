# RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJson1

## Example Usage

```typescript
import {
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJson1,
} from "@orq-ai/node/models/operations";

let value:
  RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJson1 =
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

## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONType](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponse200applicationjsontype.md)       | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |
| `models`                                                                                                                                                                                                                   | [operations.RetrieveAnnotationQueueItemLoadBalancerAnnotationQueuesResponse200ApplicationJSONModels](../../models/operations/retrieveannotationqueueitemloadbalancerannotationqueuesresponse200applicationjsonmodels.md)[] | :heavy_check_mark:                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                        |